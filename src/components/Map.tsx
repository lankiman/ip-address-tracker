import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import customIcon from "../assets/images/icon-location.svg";

interface Props {
  address: any;
  loading: boolean;
  error: number;
}

const Map = ({ address, loading, error }: Props) => {
  const { lat, lng } = address.location || {};
  const icon = new Icon({
    iconUrl: customIcon,
    iconSize: [40, 50]
  });
  return (
    <div className="h-full">
      {lat != undefined && lng != undefined && !loading && error == 0 && (
        <MapContainer
          center={[address.location?.lat, address.location?.lng]}
          className="h-full"
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[address.location?.lat, address.location?.lng]}
            icon={icon}
          />
        </MapContainer>
      )}
      {loading && (
        <div className="flex items-center justify-center h-full gap-4 text-vDarkGray">
          <div className="w-4 h-4 bg-black rounded-full animate-dot1"></div>
          <div className="w-6 h-6 delay-200 bg-black rounded-full animate-dot2"></div>
          <div className="w-8 h-8 delay-500 bg-black rounded-full animate-dot3"></div>
        </div>
      )}
      {!loading && error != 0 && (
        <div className="flex items-center justify-center h-full ml-auto text-2xl font-black animate-pulse text-vDarkGray">
          {" "}
          Unable to load Data
        </div>
      )}
    </div>
  );
};

export default Map;
