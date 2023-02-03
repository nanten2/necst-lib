__all__ = ["TR73U"]

import struct
import time
from typing import Dict

import astropy.units as u
import ogameasure

from ... import get_logger
from ...core import logic
from .weather_station_base import WeatherStation


class TR73U(WeatherStation):

    Manufacturer = "TandD"
    Model = "TR73U"

    Identifier = "port"

    def __init__(self, **kwargs) -> None:
        self.logger = get_logger(__name__)
        self.ondotori = ogameasure.TandD.tr_73u(self.Config.port)

    def _get_data(self) -> Dict[str, float]:
        with logic.busy(self, "busy"):
            try:
                ret = self.ondotori.output_current_data()
                time.sleep(0.1)
                return ret
            except struct.error:
                self.logger.warning("Failed to get data from TR73U")
                return {"temp": -273.15, "humid": 0.0, "press": 0.0}

    def get_temperature(self) -> u.Quantity:
        data = self._get_data()
        data_K = (data["temp"] * u.deg_C).to(u.K, equivalencies=u.temperature())
        return data_K

    def get_humidity(self) -> float:
        data = self._get_data()
        return data["humid"] * 0.01

    def get_pressure(self) -> u.Quantity:
        data = self._get_data()
        return data["press"] * u.hPa

    def finalize(self) -> None:
        self.ondotori.ser.close()
