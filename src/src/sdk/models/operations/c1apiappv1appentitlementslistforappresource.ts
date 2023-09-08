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
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The ListAppEntitlementsResponse message contains a list of results and a nextPageToken if applicable.
     */
    @SpeakeasyMetadata()
    listAppEntitlementsResponse?: shared.ListAppEntitlementsResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
