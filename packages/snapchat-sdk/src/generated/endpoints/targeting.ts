// Auto-generated client for targeting — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Option, AgeGroup, Gender, Languages, AdvancedDemographics, OsType, Carrier, MarketingName, Country, Metro, PostalCode, Scl, Vac, Shp, Dlxs, Dlxc, Dlxp, Nln, CategoriesLoi, ListOptionsParams, ListAgeGroupParams, ListGenderParams, ListLanguagesParams, ListAdvancedDemographicsParams, ListConnectionTypeParams, ListOsTypeParams, ListOsVersionParams, ListCarrierParams, ListMarketingNameParams, ListCountryParams, ListRegionParams, ListMetroParams, ListPostalCodeParams, ListSclsParams, ListVacParams, ListShpParams, ListDlxsParams, ListDlxcParams, ListDlxpParams, ListNlnParams, ListCategoriesLoiParams } from "../types/targeting.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — targeting */
export function createTargetingClient(api: SnapchatApiClient) {
  return {
    /** Example #1 Targeting Support for Germany ​ */
    listOptions(params: ListOptionsParams): SnapchatCursor<Option> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/targeting/v1/options`, link ? undefined : query).then((envelope) => ({
          items: unpack<Option>(envelope, "options", "option"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** targeting */
    async listAgeGroup(params: ListAgeGroupParams): Promise<AgeGroup> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/demographics/age_group`, query);
      return ensureOne<AgeGroup>(unpack<AgeGroup>(envelope, "targeting_dimensions", "age_group"), "AgeGroup");
    },

    /** targeting */
    async listGender(params: ListGenderParams): Promise<Gender> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/demographics/gender`, query);
      return ensureOne<Gender>(unpack<Gender>(envelope, "targeting_dimensions", "gender"), "Gender");
    },

    /** targeting */
    async listLanguages(params: ListLanguagesParams): Promise<Languages> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/demographics/languages`, query);
      return ensureOne<Languages>(unpack<Languages>(envelope, "targeting_dimensions", "languages"), "Languages");
    },

    /** targeting */
    async listAdvancedDemographics(params: ListAdvancedDemographicsParams): Promise<AdvancedDemographics> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/demographics/advanced_demographics`, query);
      return ensureOne<AdvancedDemographics>(unpack<AdvancedDemographics>(envelope, "targeting_dimensions", "advanced_demographics"), "AdvancedDemographics");
    },

    /** targeting */
    async listConnectionType(params: ListConnectionTypeParams): Promise<OsType> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/device/connection_type`, query);
      return ensureOne<OsType>(unpack<OsType>(envelope, "targeting_dimensions", "os_type"), "OsType");
    },

    /** targeting */
    async listOsType(params: ListOsTypeParams): Promise<OsType> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/device/os_type`, query);
      return ensureOne<OsType>(unpack<OsType>(envelope, "targeting_dimensions", "os_type"), "OsType");
    },

    /** targeting */
    async listOsVersion(params: ListOsVersionParams): Promise<Carrier> {
      const { oSTYPE, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/device/${oSTYPE}/os_version`, query);
      return ensureOne<Carrier>(unpack<Carrier>(envelope, "targeting_dimensions", "carrier"), "Carrier");
    },

    /** targeting */
    async listCarrier(params: ListCarrierParams): Promise<Carrier> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/device/carrier`, query);
      return ensureOne<Carrier>(unpack<Carrier>(envelope, "targeting_dimensions", "carrier"), "Carrier");
    },

    /** targeting */
    listMarketingName(params: ListMarketingNameParams): SnapchatCursor<MarketingName> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/targeting/device/marketing_name`, link ? undefined : query).then((envelope) => ({
          items: unpack<MarketingName>(envelope, "marketing_name", "marketing_name"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** targeting */
    listCountry(params: ListCountryParams): SnapchatCursor<Country> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/targeting/geo/country`, link ? undefined : query).then((envelope) => ({
          items: unpack<Country>(envelope, "country", "country"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** targeting */
    async listRegion(params: ListRegionParams): Promise<Metro> {
      const { countryCode, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/geo/${countryCode}/region`, query);
      return ensureOne<Metro>(unpack<Metro>(envelope, "targeting_dimensions", "metro"), "Metro");
    },

    /** targeting */
    async listMetro(params: ListMetroParams): Promise<Metro> {
      const { countryCode, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/geo/${countryCode}/metro`, query);
      return ensureOne<Metro>(unpack<Metro>(envelope, "targeting_dimensions", "metro"), "Metro");
    },

    /** targeting */
    listPostalCode(params: ListPostalCodeParams): SnapchatCursor<PostalCode> {
      const { countryCode, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/targeting/geo/${countryCode}/postal_code`, link ? undefined : query).then((envelope) => ({
          items: unpack<PostalCode>(envelope, "postal_code", "postal_code"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** targeting */
    listScls(params: ListSclsParams): SnapchatCursor<Scl> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/targeting/v1/interests/scls`, link ? undefined : query).then((envelope) => ({
          items: unpack<Scl>(envelope, "scls", "scl"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** targeting */
    listVac(params: ListVacParams): SnapchatCursor<Vac> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/targeting/v1/interests/vac`, link ? undefined : query).then((envelope) => ({
          items: unpack<Vac>(envelope, "vac", "vac"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** targeting */
    listShp(params: ListShpParams): SnapchatCursor<Shp> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/targeting/v1/interests/shp`, link ? undefined : query).then((envelope) => ({
          items: unpack<Shp>(envelope, "shp", "shp"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** targeting */
    async listDlxs(params: ListDlxsParams): Promise<Dlxs> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/interests/dlxs`, query);
      return ensureOne<Dlxs>(unpack<Dlxs>(envelope, "targeting_dimensions", "dlxs"), "Dlxs");
    },

    /** targeting */
    async listDlxc(params: ListDlxcParams): Promise<Dlxc> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/interests/dlxc`, query);
      return ensureOne<Dlxc>(unpack<Dlxc>(envelope, "targeting_dimensions", "dlxc"), "Dlxc");
    },

    /** targeting */
    async listDlxp(params: ListDlxpParams): Promise<Dlxp> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/interests/dlxp`, query);
      return ensureOne<Dlxp>(unpack<Dlxp>(envelope, "targeting_dimensions", "dlxp"), "Dlxp");
    },

    /** targeting */
    async listNln(params: ListNlnParams): Promise<Nln> {
      const query = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/targeting/interests/nln`, query);
      return ensureOne<Nln>(unpack<Nln>(envelope, "targeting_dimensions", "nln"), "Nln");
    },

    /** targeting */
    listCategoriesLoi(params: ListCategoriesLoiParams): SnapchatCursor<CategoriesLoi> {
      const query = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/targeting/location/categories_loi`, link ? undefined : query).then((envelope) => ({
          items: unpack<CategoriesLoi>(envelope, "categories_loi", "categories_loi"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
