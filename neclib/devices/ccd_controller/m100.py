import ogameasure

from ...core.security import busy
from .ccd_controller_base import CCD_Controller


class M100(CCD_Controller):

    """ccd camera, which can capture stars when optical pointing.

    Notes
    -----
    You need to install ``libgphoto2`` library in advance.

    Configuration items for this device:

    pic_captured_path : str
        Save directory path of pictures captured by ccd camera.
        e.g. "~/data/optical_pointing"

    See defaults setting file in ``neclib/defaults/config.toml``.

    """

    Model = "M100"
    Manufacturer = "Canon"

    Identifier = "host"

    def __init__(self) -> None:
        com = ogameasure.ethernet(self.Config.host, self.Config.port)
        self.ccd = ogameasure.Canon.m100(com)

    def capture(self, savepath: str) -> None:
        with busy(self, "busy"):
            self.ccd.capture(savepath)
            return None

    def finalize(self) -> None:
        self.ccd.com.close()
