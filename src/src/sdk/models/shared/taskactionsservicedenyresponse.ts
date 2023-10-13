/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskView } from "./taskview";
import { Expose, Type } from "class-transformer";

/**
 * The TaskActionsServiceDenyResponse returns a task view with paths indicating the location of expanded items in the array.
 */
export class TaskActionsServiceDenyResponse extends SpeakeasyBase {
    /**
     * Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taskView" })
    @Type(() => TaskView)
    taskView?: TaskView;

    /**
     * List of serialized related objects.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];

    /**
     * The ID of the ticket (task) deny action created by this request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ticketActionId" })
    ticketActionId?: string;
}
