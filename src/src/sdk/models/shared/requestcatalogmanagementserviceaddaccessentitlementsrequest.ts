/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementRef } from "./appentitlementref";
import { Expose, Type } from "class-transformer";

/**
 * The RequestCatalogManagementServiceAddAccessEntitlementsRequest message is used to add access entitlements to a request
 *
 * @remarks
 *  catalog to determine which users can view the request catalog.
 */
export class RequestCatalogManagementServiceAddAccessEntitlementsRequest extends SpeakeasyBase {
    /**
     * List of entitlements to add to the request catalog as access entitlements.
     */
    @SpeakeasyMetadata({ elemType: AppEntitlementRef })
    @Expose({ name: "accessEntitlements" })
    @Type(() => AppEntitlementRef)
    accessEntitlements?: AppEntitlementRef[];
}
