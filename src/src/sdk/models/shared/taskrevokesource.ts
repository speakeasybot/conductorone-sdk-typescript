/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskRevokeSourceExpired } from "./taskrevokesourceexpired";
import { TaskRevokeSourceNonUsage } from "./taskrevokesourcenonusage";
import { TaskRevokeSourceRequest } from "./taskrevokesourcerequest";
import { TaskRevokeSourceReview } from "./taskrevokesourcereview";
import { Expose, Type } from "class-transformer";

/**
 * The TaskRevokeSource message indicates the source of the revoke task is one of expired, nonUsage, request, or review.
 *
 * @remarks
 *
 * This message contains a oneof named origin. Only a single field of the following list may be set at a time:
 *   - review
 *   - request
 *   - expired
 *   - nonUsage
 *
 */
export class TaskRevokeSource extends SpeakeasyBase {
    /**
     * The TaskRevokeSourceExpired message indicates that the source of the revoke task is due to a grant expiring.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expired" })
    @Type(() => TaskRevokeSourceExpired)
    taskRevokeSourceExpired?: TaskRevokeSourceExpired;

    /**
     * The TaskRevokeSourceNonUsage message indicates that the source of the revoke task is due to the grant not being used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nonUsage" })
    @Type(() => TaskRevokeSourceNonUsage)
    taskRevokeSourceNonUsage?: TaskRevokeSourceNonUsage;

    /**
     * The TaskRevokeSourceRequest message indicates that the source of the revoke task was a request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "request" })
    @Type(() => TaskRevokeSourceRequest)
    taskRevokeSourceRequest?: TaskRevokeSourceRequest;

    /**
     * The TaskRevokeSourceReview message tracks which access review was the source of the specificed revoke ticket.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "review" })
    @Type(() => TaskRevokeSourceReview)
    taskRevokeSourceReview?: TaskRevokeSourceReview;
}
