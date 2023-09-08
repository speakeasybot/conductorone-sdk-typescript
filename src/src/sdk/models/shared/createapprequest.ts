/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The CreateAppRequest message is used to create a new app.
 */
export class CreateAppRequest extends SpeakeasyBase {
    /**
     * Creates the app with this certify policy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "certifyPolicyId" })
    certifyPolicyId?: string;

    /**
     * Creates the app with this description.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Creates the app with this display name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     * Creates the app with this grant policy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantPolicyId" })
    grantPolicyId?: string;

    /**
     * Creates the app with this monthly cost per seat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "monthlyCostUsd" })
    monthlyCostUsd?: number;

    /**
     * Creates the app with this array of owners.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "owners" })
    owners?: string[];

    /**
     * Creates the app with this revoke policy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revokePolicyId" })
    revokePolicyId?: string;
}
