/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * backend/api/pipeline.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface ApiGetTemplateResponse
 */
export interface ApiGetTemplateResponse {
    /**
     * 
     * @type {string}
     * @memberof ApiGetTemplateResponse
     */
    template?: string;
}

/**
 * 
 * @export
 * @interface ApiListPipelinesResponse
 */
export interface ApiListPipelinesResponse {
    /**
     * 
     * @type {Array&lt;ApiPipeline&gt;}
     * @memberof ApiListPipelinesResponse
     */
    pipelines?: Array<ApiPipeline>;
    /**
     * 
     * @type {string}
     * @memberof ApiListPipelinesResponse
     */
    next_page_token?: string;
}

/**
 * 
 * @export
 * @interface ApiParameter
 */
export interface ApiParameter {
    /**
     * 
     * @type {string}
     * @memberof ApiParameter
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiParameter
     */
    value?: string;
}

/**
 * 
 * @export
 * @interface ApiPipeline
 */
export interface ApiPipeline {
    /**
     * 
     * @type {string}
     * @memberof ApiPipeline
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiPipeline
     */
    created_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiPipeline
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiPipeline
     */
    description?: string;
    /**
     * 
     * @type {Array&lt;ApiParameter&gt;}
     * @memberof ApiPipeline
     */
    parameters?: Array<ApiParameter>;
    /**
     * 
     * @type {ApiUrl}
     * @memberof ApiPipeline
     */
    url?: ApiUrl;
    /**
     * In case any error happens retrieving a pipeline field, only pipeline ID and the error message is returned. Client has the flexibility of choosing how to handle error. This is especially useful during listing call.
     * @type {string}
     * @memberof ApiPipeline
     */
    error?: string;
}

/**
 * 
 * @export
 * @interface ApiStatus
 */
export interface ApiStatus {
    /**
     * 
     * @type {string}
     * @memberof ApiStatus
     */
    error?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiStatus
     */
    code?: number;
    /**
     * 
     * @type {Array&lt;ProtobufAny&gt;}
     * @memberof ApiStatus
     */
    details?: Array<ProtobufAny>;
}

/**
 * 
 * @export
 * @interface ApiUrl
 */
export interface ApiUrl {
    /**
     * 
     * @type {string}
     * @memberof ApiUrl
     */
    pipeline_url?: string;
}

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message.  Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type.  Example 1: Pack and unpack a message in C++.      Foo foo = ...;     Any any;     any.PackFrom(foo);     ...     if (any.UnpackTo(&foo)) {       ...     }  Example 2: Pack and unpack a message in Java.      Foo foo = ...;     Any any = Any.pack(foo);     ...     if (any.is(Foo.class)) {       foo = any.unpack(Foo.class);     }   Example 3: Pack and unpack a message in Python.      foo = Foo(...)     any = Any()     any.Pack(foo)     ...     if any.Is(Foo.DESCRIPTOR):       any.Unpack(foo)       ...   Example 4: Pack and unpack a message in Go       foo := &pb.Foo{...}      any, err := ptypes.MarshalAny(foo)      ...      foo := &pb.Foo{}      if err := ptypes.UnmarshalAny(any, foo); err != nil {        ...      }  The pack methods provided by protobuf library will by default use 'type.googleapis.com/full.type.name' as the type URL and the unpack methods only use the fully qualified type name after the last '/' in the type URL, for example \"foo.bar.com/x/y.z\" will yield type name \"y.z\".   JSON ==== The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example:      package google.profile;     message Person {       string first_name = 1;       string last_name = 2;     }      {       \"@type\": \"type.googleapis.com/google.profile.Person\",       \"firstName\": <string>,       \"lastName\": <string>     }  If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message [google.protobuf.Duration][]):      {       \"@type\": \"type.googleapis.com/google.protobuf.Duration\",       \"value\": \"1.212s\"     }
 * @export
 * @interface ProtobufAny
 */
export interface ProtobufAny {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one \"/\" character. The last segment of the URL's path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading \".\" is not accepted).  In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:  * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a [google.protobuf.Type][]   value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the   URL, or have them precompiled into a binary to avoid any   lookup. Therefore, binary compatibility needs to be preserved   on changes to types. (Use versioned type names to manage   breaking changes.)  Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.  Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.
     * @type {string}
     * @memberof ProtobufAny
     */
    type_url?: string;
    /**
     * Must be a valid serialized protocol buffer of the above specified type.
     * @type {string}
     * @memberof ProtobufAny
     */
    value?: string;
}


/**
 * PipelineServiceApi - fetch parameter creator
 * @export
 */
export const PipelineServiceApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ApiPipeline} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPipeline(body: ApiPipeline, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createPipeline.');
            }
            const localVarPath = `/apis/v1beta1/pipelines`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("authorization")
					: configuration.apiKey;
                localVarHeaderParameter["authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ApiPipeline" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePipeline(id: string, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deletePipeline.');
            }
            const localVarPath = `/apis/v1beta1/pipelines/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("authorization")
					: configuration.apiKey;
                localVarHeaderParameter["authorization"] = localVarApiKeyValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPipeline(id: string, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getPipeline.');
            }
            const localVarPath = `/apis/v1beta1/pipelines/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("authorization")
					: configuration.apiKey;
                localVarHeaderParameter["authorization"] = localVarApiKeyValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplate(id: string, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getTemplate.');
            }
            const localVarPath = `/apis/v1beta1/pipelines/{id}/templates`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("authorization")
					: configuration.apiKey;
                localVarHeaderParameter["authorization"] = localVarApiKeyValue;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [page_token] 
         * @param {number} [page_size] 
         * @param {string} [sort_by] Can be format of \&quot;field_name\&quot;, \&quot;field_name asc\&quot; or \&quot;field_name des\&quot; Ascending by default.
         * @param {string} [filter] A base-64 encoded, JSON-serialized Filter protocol buffer (see filter.proto).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPipelines(page_token?: string, page_size?: number, sort_by?: string, filter?: string, options: any = {}): FetchArgs {
            const localVarPath = `/apis/v1beta1/pipelines`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
					? configuration.apiKey("authorization")
					: configuration.apiKey;
                localVarHeaderParameter["authorization"] = localVarApiKeyValue;
            }

            if (page_token !== undefined) {
                localVarQueryParameter['page_token'] = page_token;
            }

            if (page_size !== undefined) {
                localVarQueryParameter['page_size'] = page_size;
            }

            if (sort_by !== undefined) {
                localVarQueryParameter['sort_by'] = sort_by;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PipelineServiceApi - functional programming interface
 * @export
 */
export const PipelineServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ApiPipeline} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPipeline(body: ApiPipeline, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ApiPipeline> {
            const localVarFetchArgs = PipelineServiceApiFetchParamCreator(configuration).createPipeline(body, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePipeline(id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
            const localVarFetchArgs = PipelineServiceApiFetchParamCreator(configuration).deletePipeline(id, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPipeline(id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ApiPipeline> {
            const localVarFetchArgs = PipelineServiceApiFetchParamCreator(configuration).getPipeline(id, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplate(id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ApiGetTemplateResponse> {
            const localVarFetchArgs = PipelineServiceApiFetchParamCreator(configuration).getTemplate(id, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {string} [page_token] 
         * @param {number} [page_size] 
         * @param {string} [sort_by] Can be format of \&quot;field_name\&quot;, \&quot;field_name asc\&quot; or \&quot;field_name des\&quot; Ascending by default.
         * @param {string} [filter] A base-64 encoded, JSON-serialized Filter protocol buffer (see filter.proto).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPipelines(page_token?: string, page_size?: number, sort_by?: string, filter?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ApiListPipelinesResponse> {
            const localVarFetchArgs = PipelineServiceApiFetchParamCreator(configuration).listPipelines(page_token, page_size, sort_by, filter, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * PipelineServiceApi - factory interface
 * @export
 */
export const PipelineServiceApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {ApiPipeline} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPipeline(body: ApiPipeline, options?: any) {
            return PipelineServiceApiFp(configuration).createPipeline(body, options)(fetch, basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePipeline(id: string, options?: any) {
            return PipelineServiceApiFp(configuration).deletePipeline(id, options)(fetch, basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPipeline(id: string, options?: any) {
            return PipelineServiceApiFp(configuration).getPipeline(id, options)(fetch, basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplate(id: string, options?: any) {
            return PipelineServiceApiFp(configuration).getTemplate(id, options)(fetch, basePath);
        },
        /**
         * 
         * @param {string} [page_token] 
         * @param {number} [page_size] 
         * @param {string} [sort_by] Can be format of \&quot;field_name\&quot;, \&quot;field_name asc\&quot; or \&quot;field_name des\&quot; Ascending by default.
         * @param {string} [filter] A base-64 encoded, JSON-serialized Filter protocol buffer (see filter.proto).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPipelines(page_token?: string, page_size?: number, sort_by?: string, filter?: string, options?: any) {
            return PipelineServiceApiFp(configuration).listPipelines(page_token, page_size, sort_by, filter, options)(fetch, basePath);
        },
    };
};

/**
 * PipelineServiceApi - object-oriented interface
 * @export
 * @class PipelineServiceApi
 * @extends {BaseAPI}
 */
export class PipelineServiceApi extends BaseAPI {
    /**
     * 
     * @param {} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PipelineServiceApi
     */
    public createPipeline(body: ApiPipeline, options?: any) {
        return PipelineServiceApiFp(this.configuration).createPipeline(body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PipelineServiceApi
     */
    public deletePipeline(id: string, options?: any) {
        return PipelineServiceApiFp(this.configuration).deletePipeline(id, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PipelineServiceApi
     */
    public getPipeline(id: string, options?: any) {
        return PipelineServiceApiFp(this.configuration).getPipeline(id, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PipelineServiceApi
     */
    public getTemplate(id: string, options?: any) {
        return PipelineServiceApiFp(this.configuration).getTemplate(id, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {} [page_token] 
     * @param {} [page_size] 
     * @param {} [sort_by] Can be format of \&quot;field_name\&quot;, \&quot;field_name asc\&quot; or \&quot;field_name des\&quot; Ascending by default.
     * @param {} [filter] A base-64 encoded, JSON-serialized Filter protocol buffer (see filter.proto).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PipelineServiceApi
     */
    public listPipelines(page_token?: string, page_size?: number, sort_by?: string, filter?: string, options?: any) {
        return PipelineServiceApiFp(this.configuration).listPipelines(page_token, page_size, sort_by, filter, options)(this.fetch, this.basePath);
    }

}

