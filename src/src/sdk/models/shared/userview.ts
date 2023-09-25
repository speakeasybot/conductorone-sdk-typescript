/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * The UserView object provides a user response object, as well as JSONPATHs to related objects provided by expanders.
 */
export class UserView extends SpeakeasyBase {
    /**
     * The User object provides all of the details for an user, as well as some configuration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => User)
    user?: User;

    /**
     * JSONPATH expression indicating the location of the user objects of delegates of the current user in the expanded array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delegatedUserPath" })
    delegatedUserPath?: string;

    /**
     * JSONPATH expression indicating the location of directory objects in the expanded array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "directoriesPath" })
    directoriesPath?: string;

    /**
     * JSONPATH expression indicating the location of the user objects that managed the current user in the expanded array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "managersPath" })
    managersPath?: string;

    /**
     * JSONPATH expression indicating the location of the roles of the current user in the expanded array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rolesPath" })
    rolesPath?: string;
}
