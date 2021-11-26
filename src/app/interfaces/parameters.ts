export interface Parameters {
  company_name: string;
  tradeMark: string;
  email: string;
  address: string;
  address_complement: string;
  city: string;
  state: string;
  zip_code: string;
  social_networks: Array<string>;
  phones: Array<Phone>;
}


export interface Phone {
  country_code: string;
  number: string;
  type: string;
}
