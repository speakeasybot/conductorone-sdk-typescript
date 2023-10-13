/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1AppEntitlementsListForAppResourceRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_resource_id" })
    appResourceId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_resource_type_id" })
    appResourceTypeId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
    pageToken?: string;
}

export class C1ApiAppV1AppEntitlementsListForAppResourceResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The ListAppEntitlementsResponse message contains a list of results and a nextPageToken if applicable.
     */
    @SpeakeasyMetadata()
    listAppEntitlementsResponse?: shared.ListAppEntitlementsResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
