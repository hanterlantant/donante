import { Builder, Validatable } from 'ts-generic-builder';

export class AddressVo implements Validatable {
    public readonly street?: string;
    public readonly housenumber?: string;
    public readonly postalCode?: string;
    public readonly city?: string;
    public readonly country?: string;

    constructor(builder: Builder<AddressVo> & AddressVo) {
        this.street = builder.street;
        this.housenumber = builder.housenumber;
        this.postalCode = builder.postalCode;
        this.city = builder.city;
        this.country = builder.country;
    }

    validate(): boolean {
        let result = true;
        result = result && this.street != null ? this.street.trim().length > 0 : result;
        result = result && this.housenumber != null ? this.housenumber.trim().length > 0 : result;
        result = result && this.postalCode != null ? this.postalCode.trim().length > 0 : result;
        result = result && this.city != null ? this.city.trim().length > 0 : result;
        result = result && this.country != null ? this.country.trim().length > 0 : result;

        return result;
    }
}
