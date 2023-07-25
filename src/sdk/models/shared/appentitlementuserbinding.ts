/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 *  The AppEntitlementUserBinding represents the relationship that gives an app user access to an app entitlement
 *
 * @remarks
 *
 */
export class AppEntitlementUserBinding extends SpeakeasyBase {
    /**
     *  The ID of the app entitlement that the app user has access to
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appEntitlementId" })
    appEntitlementId?: string;

    /**
     *  The ID of the app associated with the app entitlement
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;

    /**
     *  The ID of the app user that has access to the app entitlement
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appUserId" })
    appUserId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "deprovisionAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deprovisionAt?: Date;
}
