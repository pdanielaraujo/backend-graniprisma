export class CreateConsumerDto {
  first_name: string;
  last_name: string;
  email?: string;
  phone_number: string;
  phone_number_country_code: string;
  address: string;
  zip_code: string;
  tax_number: string;
}
