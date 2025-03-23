// utils/countries.ts
interface Country {
    name: string;
    code: string;
    idd: string;
  }
  
  export async function getCountries(): Promise<Country[]> {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries = await res.json();
  
    return countries.map((country: any) => ({
      name: country.name.common,
      code: country.cca2, 
      idd: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''), 
    }));
  }