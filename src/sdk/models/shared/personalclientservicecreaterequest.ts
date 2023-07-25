/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  The PersonalClientServiceCreateRequest message contains the fields for creating a new personal client.
 *
 * @remarks
 *
 */
export class PersonalClientServiceCreateRequest extends SpeakeasyBase {
    /**
     *  A list of CIDRs to restrict this credential to.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "allowSourceCidr" })
    allowSourceCidr?: string[];

    /**
     *  The display name for the new personal client.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expires" })
    expires?: string;

    /**
     *  The list of roles to restrict the credential to.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scopedRoles" })
    scopedRoles?: string[];
}
