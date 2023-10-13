/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The ReassignedAction object describes the outcome of a policy step that has been reassigned.
 */
export class ReassignedAction extends SpeakeasyBase {
    /**
     * The ID of the policy step that was created as a result of this reassignment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "newPolicyStepId" })
    newPolicyStepId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reassignedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    reassignedAt?: Date;

    /**
     * The UserID of the person who reassigned this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
