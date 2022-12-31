import time
from typing import Optional, Union

import astropy.units as u
import ogameasure

from ...units import dBm
from ...utils import busy, skip_on_simulator
from .signal_generator_base import SignalGenerator


class FSW0010(SignalGenerator):

    Manufacturer: str = "PhaseMatrix"
    Model = "FSW0010"

    Identifier = "host"

    @skip_on_simulator
    def __init__(self, **kwargs) -> None:
        com = ogameasure.ethernet(self.Config.host, self.Config.port)
        self.sg = ogameasure.Phasematrix.FSW0010(com)
        self.sg.use_external_reference_source()

    def set_freq(self, GHz: Union[int, float]) -> None:
        with busy(self, "busy"):
            self.sg.freq_set(GHz)
            time.sleep(0.1)

    def set_power(self, dBm: Union[int, float]) -> None:
        with busy(self, "busy"):
            self.sg.power_set(dBm)
            time.sleep(0.1)

    def get_freq(self) -> u.Quantity:
        with busy(self, "busy"):
            f = self.sg.freq_query()
            time.sleep(0.1)
            return f * u.Hz

    def get_power(self) -> u.Quantity:
        with busy(self, "busy"):
            f = self.sg.power_query()
            time.sleep(0.1)
            return f * dBm

    def start_output(self) -> None:
        with busy(self, "busy"):
            self.sg.output_on()
            time.sleep(0.1)

    def stop_output(self) -> None:
        with busy(self, "busy"):
            self.sg.output_off()
            time.sleep(0.1)

    def get_output_status(self) -> Optional[bool]:
        with busy(self, "busy"):
            f = self.sg.output_query()
            time.sleep(0.1)
            if f == 1:
                return True
            elif f == 0:
                return False
            else:
                return None

    def finalize(self) -> None:
        self.stop_output()
        try:
            self.sg.com.close()
        except AttributeError:
            pass
