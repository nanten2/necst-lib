import pytest

from neclib.utils import clip, frange, discretize


def test_clip():
    test_cases = [
        ([0.5, 0, 1], 0.5),
        ([-1, 0, 1], 0),
        ([2, 0, 1], 1),
        ([0, 0, 1], 0),
        ([1, 0, 1], 1),
        ([-0.5, -1, 0], -0.5),
        ([1, -1, 0], 0),
        ([-2, -1, 0], -1),
        ([0, -1, 0], 0),
        ([-1, -1, 0], -1),
    ]
    for args, expected in test_cases:
        assert clip(*args) == expected

    assert clip(50, absmax=5) == 5
    assert clip(-50, absmax=5) == -5
    assert clip(5, absmax=50) == 5
    assert clip(-5, absmax=50) == -5


def test_frange():
    test_cases = [
        ([0, 1], {}, [0]),
        ([0, 1, 0.5], {}, [0, 0.5]),
        ([0, 1], {"inclusive": True}, [0, 1]),
        ([0, 1, 0.3], {}, [0, 0.3, 0.6, 0.9]),
        ([0, 1, 0.3], {"inclusive": True}, [0, 0.3, 0.6, 0.9]),
        ([1, 0], {}, []),
        ([1, 0], {"inclusive": True}, []),
    ]
    for args, kwargs, expected in test_cases:
        assert list(frange(*args, **kwargs)) == pytest.approx(expected)


def test_discretize():
    test_cases = [
        ([5], 5),
        ([5, 0, 1], 5),
        ([5, 1, 1], 5),
        ([5, 0, 0.1], 5),
        ([5, 0, 0.3], 5.1),
        ([-5, 0, -0.3], -5.1),
        ([-5], -5),
        ([-5, 0, 1], -5),
        ([-5, 1, 1], -5),
        ([-5, 0, 0.1], -5),
        ([-5, 0, 0.3], -5.1),
        ([-5, 0, -0.3], -5.1),
    ]
    for args, expected in test_cases:
        assert discretize(*args) == expected

    test_cases = [
        ([5, 0, 0.3], {"method": "nearest"}, 5.1),
        ([5, 0, 0.3], {"method": "ceil"}, 5.1),
        ([5, 0, 0.3], {"method": "floor"}, 4.8),
        ([-5, 0, 0.3], {"method": "nearest"}, -5.1),
        ([-5, 0, 0.3], {"method": "ceil"}, -4.8),
        ([-5, 0, 0.3], {"method": "floor"}, -5.1),
    ]
    for args, kwargs, expected in test_cases:
        assert discretize(*args, **kwargs) == expected
