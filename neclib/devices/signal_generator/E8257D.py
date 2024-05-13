import time

import astropy.units as u
import ogameasure

from ... import get_logger
from ...core.security import busy
from ...core.units import dBm
from ...utils import skip_on_simulator
from .signal_generator_base import SignalGenerator


class E8257D(SignalGenerator):
    # TODO: add documaents.
    Manufacturer: str = "Agilent"
    Model = "E8257D"

    Identifier = "host"

    @skip_on_simulator
    def __init__(self):
        self.logger = get_logger(self.__class__.__name__)

        if self.Config.communicator == "GPIB":
            com = ogameasure.gpib_prologix(self.Config.host, self.Config.gpib_port)
        elif self.Config.communicator == "LAN":
            com = ogameasure.ethernet(self.Config.host, self.Config.port)
        else:
            self.logger.warning(
                f"There is not exsited communicator: {self.Config.communicator}."
                "Please choose USB or GPIB."
            )
        self.sg = ogameasure.Agilent.E8257D(com)

    def set_freq(self, freq_GHz):
        with busy(self, "busy"):
            self.sg.freq_set(freq_GHz)
            time.sleep(1)
            return

    def set_power(self, power_dBm):
        with busy(self, "busy"):
            self.sg.power_set(power_dBm)
            time.sleep(1)
            return

    def get_freq(self):
        with busy(self, "busy"):
            f = self.sg.freq_query()
            time.sleep(1)
            return f * u.Hz

    def get_power(self):
        with busy(self, "busy"):
            f = self.sg.power_query()
            time.sleep(1)
            return f * dBm

    def start_output(self):
        with busy(self, "busy"):
            self.sg.output_on()
            time.sleep(1)
            return

    def stop_output(self):
        with busy(self, "busy"):
            self.sg.output_off()
            time.sleep(1)
            return

    def get_output_status(self):
        with busy(self, "busy"):
            f = self.sg.output_query()
            time.sleep(1)
            if f == 1:
                return True
            elif f == 0:
                return False
            else:
                return None

    def finalize(self):
        self.stop_output()
        try:
            self.sg.com.close()
        except AttributeError:
            pass
