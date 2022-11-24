"""Informative exception, regarding the NECST system status."""

__all__ = ["NECSTAuthorityError", "NECSTConfigurationError", "NECSTTimeoutError"]


class NECSTAuthorityError(Exception):
    """Error related to controlling priority.

    Examples
    --------
    >>> raise neclib.NECSTAuthorityError("reason or advise to fix this error")

    """

    pass


class NECSTConfigurationError(Exception):
    """Error related to parameter configuration."""

    pass


class NECSTTimeoutError(Exception):
    """Error related to communication timeout."""

    pass
