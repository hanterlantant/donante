import { DomainBuilder, Validatable } from 'ts-generic-builder';

interface Address extends Validatable {
    readonly street?: string;
    readonly housenumber?: string;
    readonly postalCode?: string;
    readonly city?: string;
    readonly country?: string;
}
export class AddressVo implements Address {
    private _street?: string;
    private _housenumber?: string;
    private _postalCode?: string;
    private _city?: string;
    private _country?: string;

    constructor(builder: DomainBuilder<Address, AddressVo> & Address) {
        this._street = builder.street;
        this._housenumber = builder.housenumber;
        this._postalCode = builder.postalCode;
        this._city = builder.city;
        this._country = builder.country;
    }

    get street(): string | undefined {
        return this._street;
    }
    get housenumber(): string | undefined {
        return this._housenumber;
    }
    get postalCode(): string | undefined {
        return this._postalCode;
    }
    get city(): string | undefined {
        return this._city;
    }
    get country(): string | undefined {
        return this._country;
    }

    validate(): boolean {
        let result = true;
        result = result && this._street != null ? this._street.trim().length > 0 : result;
        result = result && this._housenumber != null ? this._housenumber.trim().length > 0 : result;
        result = result && this._postalCode != null ? this._postalCode.trim().length > 0 : result;
        result = result && this._city != null ? this._city.trim().length > 0 : result;
        result = result && this._country != null ? this._country.trim().length > 0 : result;

        return result;
    }
}
