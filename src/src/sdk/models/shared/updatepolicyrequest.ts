/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PolicyInput } from "./policy";
import { Expose, Type } from "class-transformer";

/**
 * The UpdatePolicyRequest message contains the policy object to update and a field mask to indicate which fields to update. It uses URL value for input.
 */
export class UpdatePolicyRequestInput extends SpeakeasyBase {
    /**
     * A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => PolicyInput)
    policy?: PolicyInput;

    @SpeakeasyMetadata()
    @Expose({ name: "updateMask" })
    updateMask?: string;
}
