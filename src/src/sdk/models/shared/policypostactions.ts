/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * These are actions to happen after a policy is complete.
 *
 * @remarks
 *
 * This message contains a oneof named action. Only a single field of the following list may be set at a time:
 *   - certifyRemediateImmediately
 *
 */
export class PolicyPostActions extends SpeakeasyBase {
    /**
     * ONLY valid when used in a CERTIFY Ticket Type:
     *
     * @remarks
     *  Causes any deprovision or change in a grant to be applied when Certify Ticket is closed.
     * This field is part of the `action` oneof.
     * See the documentation for `c1.api.policy.v1.PolicyPostActions` for more details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "certifyRemediateImmediately" })
    certifyRemediateImmediately?: boolean;
}
