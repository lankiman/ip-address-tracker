export interface IAddress {
  ip: string;
  location: {
    region: string;
    timezone: string;
    city: string;
  };
  mssages: string;
}
