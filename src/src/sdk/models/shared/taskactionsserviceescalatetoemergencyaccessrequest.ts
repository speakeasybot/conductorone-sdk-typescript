/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskExpandMask } from "./taskexpandmask";
import { Expose, Type } from "class-transformer";

/**
 * The TaskActionsServiceEscalateToEmergencyAccessRequest message.
 */
export class TaskActionsServiceEscalateToEmergencyAccessRequest extends SpeakeasyBase {
    /**
     * The task expand mask is an array of strings that specifes the related objects the requester wishes to have returned when making a request where the expand mask is part of the input. Use '*' to view all possible responses.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => TaskExpandMask)
    taskExpandMask?: TaskExpandMask;

    /**
     * The comment field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "comment" })
    comment?: string;

    /**
     * The policyStepId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policyStepId" })
    policyStepId?: string;
}
