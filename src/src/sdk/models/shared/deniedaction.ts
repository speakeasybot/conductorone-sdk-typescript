/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The denied action indicates that the c1.api.policy.v1.ApprovalInstance had an outcome of denied.
 */
export class DeniedAction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "deniedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deniedAt?: Date;

    /**
     * The UserID that denied this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
