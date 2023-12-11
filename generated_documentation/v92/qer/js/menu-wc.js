'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" data-src="images/oneidentity-logo.png">
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#additional-pages"'
                            : 'data-bs-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Library overview</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/identity-management.html" data-type="entity-link" data-context-id="additional">Identity Management</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/role-management.html" data-type="entity-link" data-context-id="additional">Role Management</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/it-shop.html" data-type="entity-link" data-context-id="additional">IT Shop</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/other-reusable-components.html" data-type="entity-link" data-context-id="additional">Other Reusable Components</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddressbookModule.html" data-type="entity-link" >AddressbookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AddressbookModule-ff5ce9c27b450525d533616854db4ce4d324a268bbfd481eb13b60f76c5dd4b542461300312e70887ba542dc2457d47a2bc7f964a695c7434560a2fa30214e3e"' : 'data-bs-target="#xs-components-links-module-AddressbookModule-ff5ce9c27b450525d533616854db4ce4d324a268bbfd481eb13b60f76c5dd4b542461300312e70887ba542dc2457d47a2bc7f964a695c7434560a2fa30214e3e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddressbookModule-ff5ce9c27b450525d533616854db4ce4d324a268bbfd481eb13b60f76c5dd4b542461300312e70887ba542dc2457d47a2bc7f964a695c7434560a2fa30214e3e"' :
                                            'id="xs-components-links-module-AddressbookModule-ff5ce9c27b450525d533616854db4ce4d324a268bbfd481eb13b60f76c5dd4b542461300312e70887ba542dc2457d47a2bc7f964a695c7434560a2fa30214e3e"' }>
                                            <li class="link">
                                                <a href="components/AddressbookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressbookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddressbookDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressbookDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApprovalsModule.html" data-type="entity-link" >ApprovalsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ApprovalsModule-e6e5ea149cd4ed7ad32d9e40806aceb70541affc93ac75ef39c28393fddf2a2ca1d6612c027181149bb2ea4363fbe666ede128264ba898be7e82853b2c47db77"' : 'data-bs-target="#xs-components-links-module-ApprovalsModule-e6e5ea149cd4ed7ad32d9e40806aceb70541affc93ac75ef39c28393fddf2a2ca1d6612c027181149bb2ea4363fbe666ede128264ba898be7e82853b2c47db77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApprovalsModule-e6e5ea149cd4ed7ad32d9e40806aceb70541affc93ac75ef39c28393fddf2a2ca1d6612c027181149bb2ea4363fbe666ede128264ba898be7e82853b2c47db77"' :
                                            'id="xs-components-links-module-ApprovalsModule-e6e5ea149cd4ed7ad32d9e40806aceb70541affc93ac75ef39c28393fddf2a2ca1d6612c027181149bb2ea4363fbe666ede128264ba898be7e82853b2c47db77"' }>
                                            <li class="link">
                                                <a href="components/ApprovalHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalsSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalsSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalsTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InquiriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InquiriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QueryPersonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QueryPersonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecommendationSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecommendationSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkflowActionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowActionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ApprovalsModule-e6e5ea149cd4ed7ad32d9e40806aceb70541affc93ac75ef39c28393fddf2a2ca1d6612c027181149bb2ea4363fbe666ede128264ba898be7e82853b2c47db77"' : 'data-bs-target="#xs-injectables-links-module-ApprovalsModule-e6e5ea149cd4ed7ad32d9e40806aceb70541affc93ac75ef39c28393fddf2a2ca1d6612c027181149bb2ea4363fbe666ede128264ba898be7e82853b2c47db77"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApprovalsModule-e6e5ea149cd4ed7ad32d9e40806aceb70541affc93ac75ef39c28393fddf2a2ca1d6612c027181149bb2ea4363fbe666ede128264ba898be7e82853b2c47db77"' :
                                        'id="xs-injectables-links-module-ApprovalsModule-e6e5ea149cd4ed7ad32d9e40806aceb70541affc93ac75ef39c28393fddf2a2ca1d6612c027181149bb2ea4363fbe666ede128264ba898be7e82853b2c47db77"' }>
                                        <li class="link">
                                            <a href="injectables/ApprovalsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApprovalWorkFlowModule.html" data-type="entity-link" >ApprovalWorkFlowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ApprovalWorkFlowModule-64288ee578899d4284e7a3845a8ab28217eb51dc354041e122cfc082bc82eb56c99f70cf2c2e603c9d31ac5fdb7c9765f02cd643fdfe0380e13c0fd9545532c8"' : 'data-bs-target="#xs-components-links-module-ApprovalWorkFlowModule-64288ee578899d4284e7a3845a8ab28217eb51dc354041e122cfc082bc82eb56c99f70cf2c2e603c9d31ac5fdb7c9765f02cd643fdfe0380e13c0fd9545532c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApprovalWorkFlowModule-64288ee578899d4284e7a3845a8ab28217eb51dc354041e122cfc082bc82eb56c99f70cf2c2e603c9d31ac5fdb7c9765f02cd643fdfe0380e13c0fd9545532c8"' :
                                            'id="xs-components-links-module-ApprovalWorkFlowModule-64288ee578899d4284e7a3845a8ab28217eb51dc354041e122cfc082bc82eb56c99f70cf2c2e603c9d31ac5fdb7c9765f02cd643fdfe0380e13c0fd9545532c8"' }>
                                            <li class="link">
                                                <a href="components/ApprovalLevelFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalLevelFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalStepFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalStepFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalWorkflowEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalWorkflowEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalWorkflowEditInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalWorkflowEditInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalWorkflowFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalWorkflowFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApprovalWorkflowHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApprovalWorkflowHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContainerDomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContainerDomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EdgeDomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EdgeDomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NodeDomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NodeDomComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArchivedRequestsModule.html" data-type="entity-link" >ArchivedRequestsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ArchivedRequestsModule-25ce4605067e364bee153cb2e52d0a79099688fe72f4b7b8cffddd9babc90672ed73c2b156d8e2dc90fbedc60999414c0761afa4ce60039740a769a2c65af38e"' : 'data-bs-target="#xs-components-links-module-ArchivedRequestsModule-25ce4605067e364bee153cb2e52d0a79099688fe72f4b7b8cffddd9babc90672ed73c2b156d8e2dc90fbedc60999414c0761afa4ce60039740a769a2c65af38e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArchivedRequestsModule-25ce4605067e364bee153cb2e52d0a79099688fe72f4b7b8cffddd9babc90672ed73c2b156d8e2dc90fbedc60999414c0761afa4ce60039740a769a2c65af38e"' :
                                            'id="xs-components-links-module-ArchivedRequestsModule-25ce4605067e364bee153cb2e52d0a79099688fe72f4b7b8cffddd9babc90672ed73c2b156d8e2dc90fbedc60999414c0761afa4ce60039740a769a2c65af38e"' }>
                                            <li class="link">
                                                <a href="components/ArchivedRequestsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArchivedRequestsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ArchivedRequestsModule-25ce4605067e364bee153cb2e52d0a79099688fe72f4b7b8cffddd9babc90672ed73c2b156d8e2dc90fbedc60999414c0761afa4ce60039740a769a2c65af38e"' : 'data-bs-target="#xs-injectables-links-module-ArchivedRequestsModule-25ce4605067e364bee153cb2e52d0a79099688fe72f4b7b8cffddd9babc90672ed73c2b156d8e2dc90fbedc60999414c0761afa4ce60039740a769a2c65af38e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArchivedRequestsModule-25ce4605067e364bee153cb2e52d0a79099688fe72f4b7b8cffddd9babc90672ed73c2b156d8e2dc90fbedc60999414c0761afa4ce60039740a769a2c65af38e"' :
                                        'id="xs-injectables-links-module-ArchivedRequestsModule-25ce4605067e364bee153cb2e52d0a79099688fe72f4b7b8cffddd9babc90672ed73c2b156d8e2dc90fbedc60999414c0761afa4ce60039740a769a2c65af38e"' }>
                                        <li class="link">
                                            <a href="injectables/ArchivedRequestsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArchivedRequestsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessownerAddonTileModule.html" data-type="entity-link" >BusinessownerAddonTileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BusinessownerAddonTileModule-78ed1c2bc9dfc4e9f1ed68a1095fcd6b98d21c91954f84f414a090df4d704751f304c56c78e36348cfbf8ac9a6bdbd9aa20d365b415b31229b4eb727319ed2dc"' : 'data-bs-target="#xs-components-links-module-BusinessownerAddonTileModule-78ed1c2bc9dfc4e9f1ed68a1095fcd6b98d21c91954f84f414a090df4d704751f304c56c78e36348cfbf8ac9a6bdbd9aa20d365b415b31229b4eb727319ed2dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusinessownerAddonTileModule-78ed1c2bc9dfc4e9f1ed68a1095fcd6b98d21c91954f84f414a090df4d704751f304c56c78e36348cfbf8ac9a6bdbd9aa20d365b415b31229b4eb727319ed2dc"' :
                                            'id="xs-components-links-module-BusinessownerAddonTileModule-78ed1c2bc9dfc4e9f1ed68a1095fcd6b98d21c91954f84f414a090df4d704751f304c56c78e36348cfbf8ac9a6bdbd9aa20d365b415b31229b4eb727319ed2dc"' }>
                                            <li class="link">
                                                <a href="components/BusinessOwnerAddOnTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessOwnerAddOnTileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BusinessownerOverviewTileModule.html" data-type="entity-link" >BusinessownerOverviewTileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BusinessownerOverviewTileModule-291ba848e2b827f24751fcf2924fbc413daaea6b0672aaa83eb717cd530ea37233366dff512001c5774b32c00385d9a33885c704c98d7e7919b8a5e68178c6a4"' : 'data-bs-target="#xs-components-links-module-BusinessownerOverviewTileModule-291ba848e2b827f24751fcf2924fbc413daaea6b0672aaa83eb717cd530ea37233366dff512001c5774b32c00385d9a33885c704c98d7e7919b8a5e68178c6a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BusinessownerOverviewTileModule-291ba848e2b827f24751fcf2924fbc413daaea6b0672aaa83eb717cd530ea37233366dff512001c5774b32c00385d9a33885c704c98d7e7919b8a5e68178c6a4"' :
                                            'id="xs-components-links-module-BusinessownerOverviewTileModule-291ba848e2b827f24751fcf2924fbc413daaea6b0672aaa83eb717cd530ea37233366dff512001c5774b32c00385d9a33885c704c98d7e7919b8a5e68178c6a4"' }>
                                            <li class="link">
                                                <a href="components/BusinessOwnerOverviewTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessOwnerOverviewTileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataExplorerViewModule.html" data-type="entity-link" >DataExplorerViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DataExplorerViewModule-60eb6a5e129114850270adab4fa2bda8b721d2b0d12dcecfd480cb2d4ee048b5de727e213747aae9f5d61645dbec06b65da74aeafd60bd6526155f80cf1a3940"' : 'data-bs-target="#xs-components-links-module-DataExplorerViewModule-60eb6a5e129114850270adab4fa2bda8b721d2b0d12dcecfd480cb2d4ee048b5de727e213747aae9f5d61645dbec06b65da74aeafd60bd6526155f80cf1a3940"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataExplorerViewModule-60eb6a5e129114850270adab4fa2bda8b721d2b0d12dcecfd480cb2d4ee048b5de727e213747aae9f5d61645dbec06b65da74aeafd60bd6526155f80cf1a3940"' :
                                            'id="xs-components-links-module-DataExplorerViewModule-60eb6a5e129114850270adab4fa2bda8b721d2b0d12dcecfd480cb2d4ee048b5de727e213747aae9f5d61645dbec06b65da74aeafd60bd6526155f80cf1a3940"' }>
                                            <li class="link">
                                                <a href="components/DataExplorerViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataExplorerViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DataExplorerViewModule-60eb6a5e129114850270adab4fa2bda8b721d2b0d12dcecfd480cb2d4ee048b5de727e213747aae9f5d61645dbec06b65da74aeafd60bd6526155f80cf1a3940"' : 'data-bs-target="#xs-injectables-links-module-DataExplorerViewModule-60eb6a5e129114850270adab4fa2bda8b721d2b0d12dcecfd480cb2d4ee048b5de727e213747aae9f5d61645dbec06b65da74aeafd60bd6526155f80cf1a3940"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DataExplorerViewModule-60eb6a5e129114850270adab4fa2bda8b721d2b0d12dcecfd480cb2d4ee048b5de727e213747aae9f5d61645dbec06b65da74aeafd60bd6526155f80cf1a3940"' :
                                        'id="xs-injectables-links-module-DataExplorerViewModule-60eb6a5e129114850270adab4fa2bda8b721d2b0d12dcecfd480cb2d4ee048b5de727e213747aae9f5d61645dbec06b65da74aeafd60bd6526155f80cf1a3940"' }>
                                        <li class="link">
                                            <a href="injectables/DataExplorerRegistryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataExplorerRegistryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DelegationModule.html" data-type="entity-link" >DelegationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DelegationModule-d8de48f50f5ac5f301a03c7a22de9443e0c2bfe2f1390e965e6a7289ee727a6e7de74cc4dfad8cdbe2cde349c2a0ebaf6752bea7a8a9bed587b099866c357aee"' : 'data-bs-target="#xs-components-links-module-DelegationModule-d8de48f50f5ac5f301a03c7a22de9443e0c2bfe2f1390e965e6a7289ee727a6e7de74cc4dfad8cdbe2cde349c2a0ebaf6752bea7a8a9bed587b099866c357aee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DelegationModule-d8de48f50f5ac5f301a03c7a22de9443e0c2bfe2f1390e965e6a7289ee727a6e7de74cc4dfad8cdbe2cde349c2a0ebaf6752bea7a8a9bed587b099866c357aee"' :
                                            'id="xs-components-links-module-DelegationModule-d8de48f50f5ac5f301a03c7a22de9443e0c2bfe2f1390e965e6a7289ee727a6e7de74cc4dfad8cdbe2cde349c2a0ebaf6752bea7a8a9bed587b099866c357aee"' }>
                                            <li class="link">
                                                <a href="components/DelegationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DelegationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DelegationModule-d8de48f50f5ac5f301a03c7a22de9443e0c2bfe2f1390e965e6a7289ee727a6e7de74cc4dfad8cdbe2cde349c2a0ebaf6752bea7a8a9bed587b099866c357aee"' : 'data-bs-target="#xs-injectables-links-module-DelegationModule-d8de48f50f5ac5f301a03c7a22de9443e0c2bfe2f1390e965e6a7289ee727a6e7de74cc4dfad8cdbe2cde349c2a0ebaf6752bea7a8a9bed587b099866c357aee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DelegationModule-d8de48f50f5ac5f301a03c7a22de9443e0c2bfe2f1390e965e6a7289ee727a6e7de74cc4dfad8cdbe2cde349c2a0ebaf6752bea7a8a9bed587b099866c357aee"' :
                                        'id="xs-injectables-links-module-DelegationModule-d8de48f50f5ac5f301a03c7a22de9443e0c2bfe2f1390e965e6a7289ee727a6e7de74cc4dfad8cdbe2cde349c2a0ebaf6752bea7a8a9bed587b099866c357aee"' }>
                                        <li class="link">
                                            <a href="injectables/DelegationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DelegationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicExclusionDialogModule.html" data-type="entity-link" >DynamicExclusionDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DynamicExclusionDialogModule-ffc74c7125d0a7a8fafea55a696d4521e961df701d31bd5d12089c8b55e2a7b9a742bbe2e3b4f23ab639f3df609ec65950a20012a4669fddd44be48db609fefa"' : 'data-bs-target="#xs-components-links-module-DynamicExclusionDialogModule-ffc74c7125d0a7a8fafea55a696d4521e961df701d31bd5d12089c8b55e2a7b9a742bbe2e3b4f23ab639f3df609ec65950a20012a4669fddd44be48db609fefa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicExclusionDialogModule-ffc74c7125d0a7a8fafea55a696d4521e961df701d31bd5d12089c8b55e2a7b9a742bbe2e3b4f23ab639f3df609ec65950a20012a4669fddd44be48db609fefa"' :
                                            'id="xs-components-links-module-DynamicExclusionDialogModule-ffc74c7125d0a7a8fafea55a696d4521e961df701d31bd5d12089c8b55e2a7b9a742bbe2e3b4f23ab639f3df609ec65950a20012a4669fddd44be48db609fefa"' }>
                                            <li class="link">
                                                <a href="components/DynamicExclusionDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicExclusionDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IdentitiesModule.html" data-type="entity-link" >IdentitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-IdentitiesModule-c9d7a91da4c18ac6ea0c4bee3da1e7f1cfb40ad93677364cf1aef60208f1fb2c4810fc466722f8c951fc3c6c43214c0ad22d4fc2dd00bfebd713940bda26df16"' : 'data-bs-target="#xs-components-links-module-IdentitiesModule-c9d7a91da4c18ac6ea0c4bee3da1e7f1cfb40ad93677364cf1aef60208f1fb2c4810fc466722f8c951fc3c6c43214c0ad22d4fc2dd00bfebd713940bda26df16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IdentitiesModule-c9d7a91da4c18ac6ea0c4bee3da1e7f1cfb40ad93677364cf1aef60208f1fb2c4810fc466722f8c951fc3c6c43214c0ad22d4fc2dd00bfebd713940bda26df16"' :
                                            'id="xs-components-links-module-IdentitiesModule-c9d7a91da4c18ac6ea0c4bee3da1e7f1cfb40ad93677364cf1aef60208f1fb2c4810fc466722f8c951fc3c6c43214c0ad22d4fc2dd00bfebd713940bda26df16"' }>
                                            <li class="link">
                                                <a href="components/AssignmentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateNewIdentityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateNewIdentityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataExplorerIdentitiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataExplorerIdentitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DuplicatesSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DuplicatesSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IdentitySidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentitySidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-IdentitiesModule-c9d7a91da4c18ac6ea0c4bee3da1e7f1cfb40ad93677364cf1aef60208f1fb2c4810fc466722f8c951fc3c6c43214c0ad22d4fc2dd00bfebd713940bda26df16"' : 'data-bs-target="#xs-injectables-links-module-IdentitiesModule-c9d7a91da4c18ac6ea0c4bee3da1e7f1cfb40ad93677364cf1aef60208f1fb2c4810fc466722f8c951fc3c6c43214c0ad22d4fc2dd00bfebd713940bda26df16"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IdentitiesModule-c9d7a91da4c18ac6ea0c4bee3da1e7f1cfb40ad93677364cf1aef60208f1fb2c4810fc466722f8c951fc3c6c43214c0ad22d4fc2dd00bfebd713940bda26df16"' :
                                        'id="xs-injectables-links-module-IdentitiesModule-c9d7a91da4c18ac6ea0c4bee3da1e7f1cfb40ad93677364cf1aef60208f1fb2c4810fc466722f8c951fc3c6c43214c0ad22d4fc2dd00bfebd713940bda26df16"' }>
                                        <li class="link">
                                            <a href="injectables/IdentitiesReportsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentitiesReportsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/IdentitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IdentityRoleMembershipsModule.html" data-type="entity-link" >IdentityRoleMembershipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-IdentityRoleMembershipsModule-65398473a5d2b3200020d18d4877ca8f0bfca8ab096e52d8e445e88d3912b5e29c52f7b71fcd17da17671684b7fccdc434b61e3948de60ae3bd489bc97676760"' : 'data-bs-target="#xs-components-links-module-IdentityRoleMembershipsModule-65398473a5d2b3200020d18d4877ca8f0bfca8ab096e52d8e445e88d3912b5e29c52f7b71fcd17da17671684b7fccdc434b61e3948de60ae3bd489bc97676760"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IdentityRoleMembershipsModule-65398473a5d2b3200020d18d4877ca8f0bfca8ab096e52d8e445e88d3912b5e29c52f7b71fcd17da17671684b7fccdc434b61e3948de60ae3bd489bc97676760"' :
                                            'id="xs-components-links-module-IdentityRoleMembershipsModule-65398473a5d2b3200020d18d4877ca8f0bfca8ab096e52d8e445e88d3912b5e29c52f7b71fcd17da17671684b7fccdc434b61e3948de60ae3bd489bc97676760"' }>
                                            <li class="link">
                                                <a href="components/IdentityRoleMembershipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentityRoleMembershipsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ItshopModule.html" data-type="entity-link" >ItshopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ItshopModule-9fd23bef2fe7f8bb4e54647ab36f71463529e4ce2f6b67b5cf345b9ca784abd6971cdc4aa30f291e0f6d6865de1b3f4f60dfb5e240e174716aa8ecc991a06514"' : 'data-bs-target="#xs-components-links-module-ItshopModule-9fd23bef2fe7f8bb4e54647ab36f71463529e4ce2f6b67b5cf345b9ca784abd6971cdc4aa30f291e0f6d6865de1b3f4f60dfb5e240e174716aa8ecc991a06514"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ItshopModule-9fd23bef2fe7f8bb4e54647ab36f71463529e4ce2f6b67b5cf345b9ca784abd6971cdc4aa30f291e0f6d6865de1b3f4f60dfb5e240e174716aa8ecc991a06514"' :
                                            'id="xs-components-links-module-ItshopModule-9fd23bef2fe7f8bb4e54647ab36f71463529e4ce2f6b67b5cf345b9ca784abd6971cdc4aa30f291e0f6d6865de1b3f4f60dfb5e240e174716aa8ecc991a06514"' }>
                                            <li class="link">
                                                <a href="components/DecisionHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DecisionHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NonRequestableItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NonRequestableItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeerGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeerGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceItemDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShelfSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShelfSelectionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ItshopModule-9fd23bef2fe7f8bb4e54647ab36f71463529e4ce2f6b67b5cf345b9ca784abd6971cdc4aa30f291e0f6d6865de1b3f4f60dfb5e240e174716aa8ecc991a06514"' : 'data-bs-target="#xs-injectables-links-module-ItshopModule-9fd23bef2fe7f8bb4e54647ab36f71463529e4ce2f6b67b5cf345b9ca784abd6971cdc4aa30f291e0f6d6865de1b3f4f60dfb5e240e174716aa8ecc991a06514"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ItshopModule-9fd23bef2fe7f8bb4e54647ab36f71463529e4ce2f6b67b5cf345b9ca784abd6971cdc4aa30f291e0f6d6865de1b3f4f60dfb5e240e174716aa8ecc991a06514"' :
                                        'id="xs-injectables-links-module-ItshopModule-9fd23bef2fe7f8bb4e54647ab36f71463529e4ce2f6b67b5cf345b9ca784abd6971cdc4aa30f291e0f6d6865de1b3f4f60dfb5e240e174716aa8ecc991a06514"' }>
                                        <li class="link">
                                            <a href="injectables/ItshopService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItshopService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShelfService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShelfService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ItshopPatternModule.html" data-type="entity-link" >ItshopPatternModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ItshopPatternModule-2c7f1ae3e3529c6b8d428e71cd6938bf21638afd1d928c5835bd5388a5319b690a10cd1919b91c78162aaa0bc4afcc161e113e35b777e28ab22e46e1449c7c80"' : 'data-bs-target="#xs-components-links-module-ItshopPatternModule-2c7f1ae3e3529c6b8d428e71cd6938bf21638afd1d928c5835bd5388a5319b690a10cd1919b91c78162aaa0bc4afcc161e113e35b777e28ab22e46e1449c7c80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ItshopPatternModule-2c7f1ae3e3529c6b8d428e71cd6938bf21638afd1d928c5835bd5388a5319b690a10cd1919b91c78162aaa0bc4afcc161e113e35b777e28ab22e46e1449c7c80"' :
                                            'id="xs-components-links-module-ItshopPatternModule-2c7f1ae3e3529c6b8d428e71cd6938bf21638afd1d928c5835bd5388a5319b690a10cd1919b91c78162aaa0bc4afcc161e113e35b777e28ab22e46e1449c7c80"' }>
                                            <li class="link">
                                                <a href="components/DuplicatePatternItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DuplicatePatternItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItshopPatternAddProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItshopPatternAddProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItshopPatternComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItshopPatternComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItshopPatternCreateSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItshopPatternCreateSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItshopPatternItemEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItshopPatternItemEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItshopPatternSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItshopPatternSidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JustificationModule.html" data-type="entity-link" >JustificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-JustificationModule-b4c9a5f4fd0c1c9a9b66710e9abaf5dd4c34de2b61ee4edbcb93434ebdb17a013d46a62ca74fdb55480bf69aeb9f90df2c8c71ca584b51139d046db27b9c12a9"' : 'data-bs-target="#xs-components-links-module-JustificationModule-b4c9a5f4fd0c1c9a9b66710e9abaf5dd4c34de2b61ee4edbcb93434ebdb17a013d46a62ca74fdb55480bf69aeb9f90df2c8c71ca584b51139d046db27b9c12a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JustificationModule-b4c9a5f4fd0c1c9a9b66710e9abaf5dd4c34de2b61ee4edbcb93434ebdb17a013d46a62ca74fdb55480bf69aeb9f90df2c8c71ca584b51139d046db27b9c12a9"' :
                                            'id="xs-components-links-module-JustificationModule-b4c9a5f4fd0c1c9a9b66710e9abaf5dd4c34de2b61ee4edbcb93434ebdb17a013d46a62ca74fdb55480bf69aeb9f90df2c8c71ca584b51139d046db27b9c12a9"' }>
                                            <li class="link">
                                                <a href="components/DecisionReasonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DecisionReasonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JustificationModule-b4c9a5f4fd0c1c9a9b66710e9abaf5dd4c34de2b61ee4edbcb93434ebdb17a013d46a62ca74fdb55480bf69aeb9f90df2c8c71ca584b51139d046db27b9c12a9"' : 'data-bs-target="#xs-injectables-links-module-JustificationModule-b4c9a5f4fd0c1c9a9b66710e9abaf5dd4c34de2b61ee4edbcb93434ebdb17a013d46a62ca74fdb55480bf69aeb9f90df2c8c71ca584b51139d046db27b9c12a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JustificationModule-b4c9a5f4fd0c1c9a9b66710e9abaf5dd4c34de2b61ee4edbcb93434ebdb17a013d46a62ca74fdb55480bf69aeb9f90df2c8c71ca584b51139d046db27b9c12a9"' :
                                        'id="xs-injectables-links-module-JustificationModule-b4c9a5f4fd0c1c9a9b66710e9abaf5dd4c34de2b61ee4edbcb93434ebdb17a013d46a62ca74fdb55480bf69aeb9f90df2c8c71ca584b51139d046db27b9c12a9"' }>
                                        <li class="link">
                                            <a href="injectables/JustificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JustificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyResponsibilitiesViewModule.html" data-type="entity-link" >MyResponsibilitiesViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MyResponsibilitiesViewModule-c4c6ab81749b0b96fbe585af2126c2f9d82ccb5af2ca1778773ffd096e831639f01fbf44b5191d840fbb2497dbccf3b9af084649ae6bc8fc76d37681572b71ee"' : 'data-bs-target="#xs-components-links-module-MyResponsibilitiesViewModule-c4c6ab81749b0b96fbe585af2126c2f9d82ccb5af2ca1778773ffd096e831639f01fbf44b5191d840fbb2497dbccf3b9af084649ae6bc8fc76d37681572b71ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyResponsibilitiesViewModule-c4c6ab81749b0b96fbe585af2126c2f9d82ccb5af2ca1778773ffd096e831639f01fbf44b5191d840fbb2497dbccf3b9af084649ae6bc8fc76d37681572b71ee"' :
                                            'id="xs-components-links-module-MyResponsibilitiesViewModule-c4c6ab81749b0b96fbe585af2126c2f9d82ccb5af2ca1778773ffd096e831639f01fbf44b5191d840fbb2497dbccf3b9af084649ae6bc8fc76d37681572b71ee"' }>
                                            <li class="link">
                                                <a href="components/MyResponsibilitiesViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyResponsibilitiesViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MyResponsibilitiesViewModule-c4c6ab81749b0b96fbe585af2126c2f9d82ccb5af2ca1778773ffd096e831639f01fbf44b5191d840fbb2497dbccf3b9af084649ae6bc8fc76d37681572b71ee"' : 'data-bs-target="#xs-injectables-links-module-MyResponsibilitiesViewModule-c4c6ab81749b0b96fbe585af2126c2f9d82ccb5af2ca1778773ffd096e831639f01fbf44b5191d840fbb2497dbccf3b9af084649ae6bc8fc76d37681572b71ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MyResponsibilitiesViewModule-c4c6ab81749b0b96fbe585af2126c2f9d82ccb5af2ca1778773ffd096e831639f01fbf44b5191d840fbb2497dbccf3b9af084649ae6bc8fc76d37681572b71ee"' :
                                        'id="xs-injectables-links-module-MyResponsibilitiesViewModule-c4c6ab81749b0b96fbe585af2126c2f9d82ccb5af2ca1778773ffd096e831639f01fbf44b5191d840fbb2497dbccf3b9af084649ae6bc8fc76d37681572b71ee"' }>
                                        <li class="link">
                                            <a href="injectables/MyResponsibilitiesRegistryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyResponsibilitiesRegistryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewRequestModule.html" data-type="entity-link" >NewRequestModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NewRequestModule-b1907bf24d284190af717295328d05ae1bff52f1bf709fcc9b4782f14737eeff87a7439b1daeccb1c51ef9012e898471aa87d835eecfe62076c48316ed042c90"' : 'data-bs-target="#xs-components-links-module-NewRequestModule-b1907bf24d284190af717295328d05ae1bff52f1bf709fcc9b4782f14737eeff87a7439b1daeccb1c51ef9012e898471aa87d835eecfe62076c48316ed042c90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewRequestModule-b1907bf24d284190af717295328d05ae1bff52f1bf709fcc9b4782f14737eeff87a7439b1daeccb1c51ef9012e898471aa87d835eecfe62076c48316ed042c90"' :
                                            'id="xs-components-links-module-NewRequestModule-b1907bf24d284190af717295328d05ae1bff52f1bf709fcc9b4782f14737eeff87a7439b1daeccb1c51ef9012e898471aa87d835eecfe62076c48316ed042c90"' }>
                                            <li class="link">
                                                <a href="components/NewRequestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestHeaderToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestHeaderToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestPeerGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestPeerGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestProductBundleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestProductBundleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestRecipientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestRecipientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestReferenceUserCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestReferenceUserCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestReferenceUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestReferenceUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRequestSelectedProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRequestSelectedProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeerGroupDiscardSelectedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeerGroupDiscardSelectedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductBundleItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductBundleItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductBundleListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductBundleListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductEntitlementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductEntitlementsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-NewRequestModule-b1907bf24d284190af717295328d05ae1bff52f1bf709fcc9b4782f14737eeff87a7439b1daeccb1c51ef9012e898471aa87d835eecfe62076c48316ed042c90"' : 'data-bs-target="#xs-directives-links-module-NewRequestModule-b1907bf24d284190af717295328d05ae1bff52f1bf709fcc9b4782f14737eeff87a7439b1daeccb1c51ef9012e898471aa87d835eecfe62076c48316ed042c90"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NewRequestModule-b1907bf24d284190af717295328d05ae1bff52f1bf709fcc9b4782f14737eeff87a7439b1daeccb1c51ef9012e898471aa87d835eecfe62076c48316ed042c90"' :
                                        'id="xs-directives-links-module-NewRequestModule-b1907bf24d284190af717295328d05ae1bff52f1bf709fcc9b4782f14737eeff87a7439b1daeccb1c51ef9012e898471aa87d835eecfe62076c48316ed042c90"' }>
                                        <li class="link">
                                            <a href="directives/ElementVisibilityDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ElementVisibilityDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewRequestRoutingModule.html" data-type="entity-link" >NewRequestRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ObjectHyperviewModule.html" data-type="entity-link" >ObjectHyperviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ObjectHyperviewModule-c73207b53a946d503205b2142b70a7f4df4bba24474331e39d8b7a7215897e602c9fa618594856190bf55aa6cf161f44453b01b9c62e759ef3342453a6e9acc4"' : 'data-bs-target="#xs-components-links-module-ObjectHyperviewModule-c73207b53a946d503205b2142b70a7f4df4bba24474331e39d8b7a7215897e602c9fa618594856190bf55aa6cf161f44453b01b9c62e759ef3342453a6e9acc4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ObjectHyperviewModule-c73207b53a946d503205b2142b70a7f4df4bba24474331e39d8b7a7215897e602c9fa618594856190bf55aa6cf161f44453b01b9c62e759ef3342453a6e9acc4"' :
                                            'id="xs-components-links-module-ObjectHyperviewModule-c73207b53a946d503205b2142b70a7f4df4bba24474331e39d8b7a7215897e602c9fa618594856190bf55aa6cf161f44453b01b9c62e759ef3342453a6e9acc4"' }>
                                            <li class="link">
                                                <a href="components/ObjectHyperviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectHyperviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpsModule.html" data-type="entity-link" >OpsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OpsModule-c9b03ae99bed37e1c6da2014a2ced994dbad6335980a5491627ead84fc7eb525c5d438838fbbc74e5845347de183210b75decdca082710a45eada553d37c0071"' : 'data-bs-target="#xs-components-links-module-OpsModule-c9b03ae99bed37e1c6da2014a2ced994dbad6335980a5491627ead84fc7eb525c5d438838fbbc74e5845347de183210b75decdca082710a45eada553d37c0071"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OpsModule-c9b03ae99bed37e1c6da2014a2ced994dbad6335980a5491627ead84fc7eb525c5d438838fbbc74e5845347de183210b75decdca082710a45eada553d37c0071"' :
                                            'id="xs-components-links-module-OpsModule-c9b03ae99bed37e1c6da2014a2ced994dbad6335980a5491627ead84fc7eb525c5d438838fbbc74e5845347de183210b75decdca082710a45eada553d37c0071"' }>
                                            <li class="link">
                                                <a href="components/ObjectOverviewPersonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectOverviewPersonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasscodeViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasscodeViewerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrgChartModule.html" data-type="entity-link" >OrgChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OrgChartModule-e49cb3faf28bb355255e130c87977c66b2a92e2e423d500925a57fc2ef61fbd9c1ed27229bf4eefc8ab5f4c51523b6d5cd98a377b8199ed143ed39457afc91f0"' : 'data-bs-target="#xs-components-links-module-OrgChartModule-e49cb3faf28bb355255e130c87977c66b2a92e2e423d500925a57fc2ef61fbd9c1ed27229bf4eefc8ab5f4c51523b6d5cd98a377b8199ed143ed39457afc91f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrgChartModule-e49cb3faf28bb355255e130c87977c66b2a92e2e423d500925a57fc2ef61fbd9c1ed27229bf4eefc8ab5f4c51523b6d5cd98a377b8199ed143ed39457afc91f0"' :
                                            'id="xs-components-links-module-OrgChartModule-e49cb3faf28bb355255e130c87977c66b2a92e2e423d500925a57fc2ef61fbd9c1ed27229bf4eefc8ab5f4c51523b6d5cd98a377b8199ed143ed39457afc91f0"' }>
                                            <li class="link">
                                                <a href="components/IdentityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrgChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrgChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrgChartModule-e49cb3faf28bb355255e130c87977c66b2a92e2e423d500925a57fc2ef61fbd9c1ed27229bf4eefc8ab5f4c51523b6d5cd98a377b8199ed143ed39457afc91f0"' : 'data-bs-target="#xs-injectables-links-module-OrgChartModule-e49cb3faf28bb355255e130c87977c66b2a92e2e423d500925a57fc2ef61fbd9c1ed27229bf4eefc8ab5f4c51523b6d5cd98a377b8199ed143ed39457afc91f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrgChartModule-e49cb3faf28bb355255e130c87977c66b2a92e2e423d500925a57fc2ef61fbd9c1ed27229bf4eefc8ab5f4c51523b6d5cd98a377b8199ed143ed39457afc91f0"' :
                                        'id="xs-injectables-links-module-OrgChartModule-e49cb3faf28bb355255e130c87977c66b2a92e2e423d500925a57fc2ef61fbd9c1ed27229bf4eefc8ab5f4c51523b6d5cd98a377b8199ed143ed39457afc91f0"' }>
                                        <li class="link">
                                            <a href="injectables/OrgChartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrgChartService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OwnerControlModule.html" data-type="entity-link" >OwnerControlModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OwnerControlModule-eef680d999f3821623be888f574bec2c8a371e23e8c711a9ea39756bfef3ede22f1c640e7727eb7cdb4baa03438924c7e6d8f9e19dab3c7e2e2e69f815466f5b"' : 'data-bs-target="#xs-components-links-module-OwnerControlModule-eef680d999f3821623be888f574bec2c8a371e23e8c711a9ea39756bfef3ede22f1c640e7727eb7cdb4baa03438924c7e6d8f9e19dab3c7e2e2e69f815466f5b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OwnerControlModule-eef680d999f3821623be888f574bec2c8a371e23e8c711a9ea39756bfef3ede22f1c640e7727eb7cdb4baa03438924c7e6d8f9e19dab3c7e2e2e69f815466f5b"' :
                                            'id="xs-components-links-module-OwnerControlModule-eef680d999f3821623be888f574bec2c8a371e23e8c711a9ea39756bfef3ede22f1c640e7727eb7cdb4baa03438924c7e6d8f9e19dab3c7e2e2e69f815466f5b"' }>
                                            <li class="link">
                                                <a href="components/OwnerControlComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OwnerControlComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PasscodeLoginModule.html" data-type="entity-link" >PasscodeLoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PasscodeLoginModule-9a672491441057453866b1fe2c793cf08bf9a1a0e738dfded1bae6590140d5a935f48f7dd941926a260cad6e7a56f83318a94953e31374d932f418e952c011e6"' : 'data-bs-target="#xs-components-links-module-PasscodeLoginModule-9a672491441057453866b1fe2c793cf08bf9a1a0e738dfded1bae6590140d5a935f48f7dd941926a260cad6e7a56f83318a94953e31374d932f418e952c011e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PasscodeLoginModule-9a672491441057453866b1fe2c793cf08bf9a1a0e738dfded1bae6590140d5a935f48f7dd941926a260cad6e7a56f83318a94953e31374d932f418e952c011e6"' :
                                            'id="xs-components-links-module-PasscodeLoginModule-9a672491441057453866b1fe2c793cf08bf9a1a0e738dfded1bae6590140d5a935f48f7dd941926a260cad6e7a56f83318a94953e31374d932f418e952c011e6"' }>
                                            <li class="link">
                                                <a href="components/PasscodeLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasscodeLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PasswordModule.html" data-type="entity-link" >PasswordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PasswordModule-a284ddd5f8b26d7d61fb764c0523d9ae26d4874f3bc67ff2bcbab91bb198383ab0e49e4e8437ad66994714624b5b7cde6dd2960b9c2e69493bf888d03f215aaf"' : 'data-bs-target="#xs-components-links-module-PasswordModule-a284ddd5f8b26d7d61fb764c0523d9ae26d4874f3bc67ff2bcbab91bb198383ab0e49e4e8437ad66994714624b5b7cde6dd2960b9c2e69493bf888d03f215aaf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PasswordModule-a284ddd5f8b26d7d61fb764c0523d9ae26d4874f3bc67ff2bcbab91bb198383ab0e49e4e8437ad66994714624b5b7cde6dd2960b9c2e69493bf888d03f215aaf"' :
                                            'id="xs-components-links-module-PasswordModule-a284ddd5f8b26d7d61fb764c0523d9ae26d4874f3bc67ff2bcbab91bb198383ab0e49e4e8437ad66994714624b5b7cde6dd2960b9c2e69493bf888d03f215aaf"' }>
                                            <li class="link">
                                                <a href="components/CheckPasswordsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckPasswordsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordQueryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordQueryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordResetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordResetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PasswordModule-a284ddd5f8b26d7d61fb764c0523d9ae26d4874f3bc67ff2bcbab91bb198383ab0e49e4e8437ad66994714624b5b7cde6dd2960b9c2e69493bf888d03f215aaf"' : 'data-bs-target="#xs-injectables-links-module-PasswordModule-a284ddd5f8b26d7d61fb764c0523d9ae26d4874f3bc67ff2bcbab91bb198383ab0e49e4e8437ad66994714624b5b7cde6dd2960b9c2e69493bf888d03f215aaf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PasswordModule-a284ddd5f8b26d7d61fb764c0523d9ae26d4874f3bc67ff2bcbab91bb198383ab0e49e4e8437ad66994714624b5b7cde6dd2960b9c2e69493bf888d03f215aaf"' :
                                        'id="xs-injectables-links-module-PasswordModule-a284ddd5f8b26d7d61fb764c0523d9ae26d4874f3bc67ff2bcbab91bb198383ab0e49e4e8437ad66994714624b5b7cde6dd2960b9c2e69493bf888d03f215aaf"' }>
                                        <li class="link">
                                            <a href="injectables/PasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatternItemsModule.html" data-type="entity-link" >PatternItemsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PatternItemsModule-e51be077069cd1bf2de469804b40a935b3fd3499e9e1b7ab34160a3b2a99c32a41c041bfb5ea46a8604b4290f17d273be5b61714b5ff94dba07f0be0695b1e23"' : 'data-bs-target="#xs-components-links-module-PatternItemsModule-e51be077069cd1bf2de469804b40a935b3fd3499e9e1b7ab34160a3b2a99c32a41c041bfb5ea46a8604b4290f17d273be5b61714b5ff94dba07f0be0695b1e23"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatternItemsModule-e51be077069cd1bf2de469804b40a935b3fd3499e9e1b7ab34160a3b2a99c32a41c041bfb5ea46a8604b4290f17d273be5b61714b5ff94dba07f0be0695b1e23"' :
                                            'id="xs-components-links-module-PatternItemsModule-e51be077069cd1bf2de469804b40a935b3fd3499e9e1b7ab34160a3b2a99c32a41c041bfb5ea46a8604b4290f17d273be5b61714b5ff94dba07f0be0695b1e23"' }>
                                            <li class="link">
                                                <a href="components/PatternItemListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatternItemListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersonModule.html" data-type="entity-link" >PersonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductSelectionModule.html" data-type="entity-link" >ProductSelectionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductSelectionModule-37839cf44d3c537ea525f7ed0c95c7a0333d9ef33e6607c7c7034c8add71f1afc706ab48b08d9b5a6f3d2ed63d3a9568145b5f30a020757e16c9f3fa8b3ab7e1"' : 'data-bs-target="#xs-components-links-module-ProductSelectionModule-37839cf44d3c537ea525f7ed0c95c7a0333d9ef33e6607c7c7034c8add71f1afc706ab48b08d9b5a6f3d2ed63d3a9568145b5f30a020757e16c9f3fa8b3ab7e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductSelectionModule-37839cf44d3c537ea525f7ed0c95c7a0333d9ef33e6607c7c7034c8add71f1afc706ab48b08d9b5a6f3d2ed63d3a9568145b5f30a020757e16c9f3fa8b3ab7e1"' :
                                            'id="xs-components-links-module-ProductSelectionModule-37839cf44d3c537ea525f7ed0c95c7a0333d9ef33e6607c7c7034c8add71f1afc706ab48b08d9b5a6f3d2ed63d3a9568145b5f30a020757e16c9f3fa8b3ab7e1"' }>
                                            <li class="link">
                                                <a href="components/CategoryTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OptionalItemsSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptionalItemsSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PatternDetailsSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatternDetailsSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailsSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailsSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductSelectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">ProductSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleMembershipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleMembershipsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceCategoryListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceCategoryListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceItemEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductSelectionModule-37839cf44d3c537ea525f7ed0c95c7a0333d9ef33e6607c7c7034c8add71f1afc706ab48b08d9b5a6f3d2ed63d3a9568145b5f30a020757e16c9f3fa8b3ab7e1"' : 'data-bs-target="#xs-injectables-links-module-ProductSelectionModule-37839cf44d3c537ea525f7ed0c95c7a0333d9ef33e6607c7c7034c8add71f1afc706ab48b08d9b5a6f3d2ed63d3a9568145b5f30a020757e16c9f3fa8b3ab7e1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductSelectionModule-37839cf44d3c537ea525f7ed0c95c7a0333d9ef33e6607c7c7034c8add71f1afc706ab48b08d9b5a6f3d2ed63d3a9568145b5f30a020757e16c9f3fa8b3ab7e1"' :
                                        'id="xs-injectables-links-module-ProductSelectionModule-37839cf44d3c537ea525f7ed0c95c7a0333d9ef33e6607c7c7034c8add71f1afc706ab48b08d9b5a6f3d2ed63d3a9568145b5f30a020757e16c9f3fa8b3ab7e1"' }>
                                        <li class="link">
                                            <a href="injectables/ProductSelectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductSelectionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProfileModule-2dad231888bd1d4c936a2340abbdbde46572161949fcbb31a11ba2d978771c5eaed1ec5cb6845c20f98bedfb0e341c0ccb08d55993d33a89d2b6b34927ee946c"' : 'data-bs-target="#xs-components-links-module-ProfileModule-2dad231888bd1d4c936a2340abbdbde46572161949fcbb31a11ba2d978771c5eaed1ec5cb6845c20f98bedfb0e341c0ccb08d55993d33a89d2b6b34927ee946c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-2dad231888bd1d4c936a2340abbdbde46572161949fcbb31a11ba2d978771c5eaed1ec5cb6845c20f98bedfb0e341c0ccb08d55993d33a89d2b6b34927ee946c"' :
                                            'id="xs-components-links-module-ProfileModule-2dad231888bd1d4c936a2340abbdbde46572161949fcbb31a11ba2d978771c5eaed1ec5cb6845c20f98bedfb0e341c0ccb08d55993d33a89d2b6b34927ee946c"' }>
                                            <li class="link">
                                                <a href="components/IdentitySelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentitySelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MailSubscriptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailSubscriptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordQuestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordQuestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordQuestionsSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordQuestionsSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecurityKeysComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityKeysComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecurityKeysSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityKeysSidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProfileModule-2dad231888bd1d4c936a2340abbdbde46572161949fcbb31a11ba2d978771c5eaed1ec5cb6845c20f98bedfb0e341c0ccb08d55993d33a89d2b6b34927ee946c"' : 'data-bs-target="#xs-injectables-links-module-ProfileModule-2dad231888bd1d4c936a2340abbdbde46572161949fcbb31a11ba2d978771c5eaed1ec5cb6845c20f98bedfb0e341c0ccb08d55993d33a89d2b6b34927ee946c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-2dad231888bd1d4c936a2340abbdbde46572161949fcbb31a11ba2d978771c5eaed1ec5cb6845c20f98bedfb0e341c0ccb08d55993d33a89d2b6b34927ee946c"' :
                                        'id="xs-injectables-links-module-ProfileModule-2dad231888bd1d4c936a2340abbdbde46572161949fcbb31a11ba2d978771c5eaed1ec5cb6845c20f98bedfb0e341c0ccb08d55993d33a89d2b6b34927ee946c"' }>
                                        <li class="link">
                                            <a href="injectables/MailSubscriptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailSubscriptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserModelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserModelService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectConfigurationModule.html" data-type="entity-link" >ProjectConfigurationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProjectConfigurationModule-c3d2cdc88e3c710190c7629dd97a58366dbcaff0fff875fcdca7fbf57fb845cc3a8e7a985db44fdd590de043b6af87eaad3b5b34d320b09d901eb444c30118f4"' : 'data-bs-target="#xs-injectables-links-module-ProjectConfigurationModule-c3d2cdc88e3c710190c7629dd97a58366dbcaff0fff875fcdca7fbf57fb845cc3a8e7a985db44fdd590de043b6af87eaad3b5b34d320b09d901eb444c30118f4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProjectConfigurationModule-c3d2cdc88e3c710190c7629dd97a58366dbcaff0fff875fcdca7fbf57fb845cc3a8e7a985db44fdd590de043b6af87eaad3b5b34d320b09d901eb444c30118f4"' :
                                        'id="xs-injectables-links-module-ProjectConfigurationModule-c3d2cdc88e3c710190c7629dd97a58366dbcaff0fff875fcdca7fbf57fb845cc3a8e7a985db44fdd590de043b6af87eaad3b5b34d320b09d901eb444c30118f4"' }>
                                        <li class="link">
                                            <a href="injectables/ProjectConfigurationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectConfigurationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QaLoginModule.html" data-type="entity-link" >QaLoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-QaLoginModule-02c327657f55ac10dfcc4c6b217a805238fec253e9cc10b11bfb04db871f0e0ac2e5a825ce9362a3a20034cf0aeb54d51923027984d17cae651997bb581e88ec"' : 'data-bs-target="#xs-components-links-module-QaLoginModule-02c327657f55ac10dfcc4c6b217a805238fec253e9cc10b11bfb04db871f0e0ac2e5a825ce9362a3a20034cf0aeb54d51923027984d17cae651997bb581e88ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QaLoginModule-02c327657f55ac10dfcc4c6b217a805238fec253e9cc10b11bfb04db871f0e0ac2e5a825ce9362a3a20034cf0aeb54d51923027984d17cae651997bb581e88ec"' :
                                            'id="xs-components-links-module-QaLoginModule-02c327657f55ac10dfcc4c6b217a805238fec253e9cc10b11bfb04db871f0e0ac2e5a825ce9362a3a20034cf0aeb54d51923027984d17cae651997bb581e88ec"' }>
                                            <li class="link">
                                                <a href="components/QaLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QaLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QerModule.html" data-type="entity-link" >QerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-QerModule-63ad5c6afd273235c9ccdd59526ef5b3fe8638605b4ae59e68000ac2127e625e8766caf38f7075bd8fd638570e960f7e57af3613fd60300227311302942eee97"' : 'data-bs-target="#xs-components-links-module-QerModule-63ad5c6afd273235c9ccdd59526ef5b3fe8638605b4ae59e68000ac2127e625e8766caf38f7075bd8fd638570e960f7e57af3613fd60300227311302942eee97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QerModule-63ad5c6afd273235c9ccdd59526ef5b3fe8638605b4ae59e68000ac2127e625e8766caf38f7075bd8fd638570e960f7e57af3613fd60300227311302942eee97"' :
                                            'id="xs-components-links-module-QerModule-63ad5c6afd273235c9ccdd59526ef5b3fe8638605b4ae59e68000ac2127e625e8766caf38f7075bd8fd638570e960f7e57af3613fd60300227311302942eee97"' }>
                                            <li class="link">
                                                <a href="components/BusinessOwnerChartSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BusinessOwnerChartSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ObjectOverviewPersonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectOverviewPersonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasscodeViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasscodeViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecommendationSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecommendationSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-QerModule-63ad5c6afd273235c9ccdd59526ef5b3fe8638605b4ae59e68000ac2127e625e8766caf38f7075bd8fd638570e960f7e57af3613fd60300227311302942eee97"' : 'data-bs-target="#xs-injectables-links-module-QerModule-63ad5c6afd273235c9ccdd59526ef5b3fe8638605b4ae59e68000ac2127e625e8766caf38f7075bd8fd638570e960f7e57af3613fd60300227311302942eee97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QerModule-63ad5c6afd273235c9ccdd59526ef5b3fe8638605b4ae59e68000ac2127e625e8766caf38f7075bd8fd638570e960f7e57af3613fd60300227311302942eee97"' :
                                        'id="xs-injectables-links-module-QerModule-63ad5c6afd273235c9ccdd59526ef5b3fe8638605b4ae59e68000ac2127e625e8766caf38f7075bd8fd638570e960f7e57af3613fd60300227311302942eee97"' }>
                                        <li class="link">
                                            <a href="injectables/PatternItemService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatternItemService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ServiceItemsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QpmIntegrationModule.html" data-type="entity-link" >QpmIntegrationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-QpmIntegrationModule-51e5ef96cf579780b2e1f3d25e51abaa70b8b2f5b380cff98279f7e4b6802ebc18786de7b9d4d4f0c6aa6acbd61d8beb854bddce8af4650efc313b9077c84e62"' : 'data-bs-target="#xs-components-links-module-QpmIntegrationModule-51e5ef96cf579780b2e1f3d25e51abaa70b8b2f5b380cff98279f7e4b6802ebc18786de7b9d4d4f0c6aa6acbd61d8beb854bddce8af4650efc313b9077c84e62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QpmIntegrationModule-51e5ef96cf579780b2e1f3d25e51abaa70b8b2f5b380cff98279f7e4b6802ebc18786de7b9d4d4f0c6aa6acbd61d8beb854bddce8af4650efc313b9077c84e62"' :
                                            'id="xs-components-links-module-QpmIntegrationModule-51e5ef96cf579780b2e1f3d25e51abaa70b8b2f5b380cff98279f7e4b6802ebc18786de7b9d4d4f0c6aa6acbd61d8beb854bddce8af4650efc313b9077c84e62"' }>
                                            <li class="link">
                                                <a href="components/QpmIntegrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QpmIntegrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RelatedApplicationsModule.html" data-type="entity-link" >RelatedApplicationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RelatedApplicationsModule-ad919b1c5168c27766cda85f3e868fdee415b05b4fc7d586a33e38279d331fe51959bb68c3f6d0af550395929e134d38c182f3f7d0b71ace938fb07826223cc4"' : 'data-bs-target="#xs-components-links-module-RelatedApplicationsModule-ad919b1c5168c27766cda85f3e868fdee415b05b4fc7d586a33e38279d331fe51959bb68c3f6d0af550395929e134d38c182f3f7d0b71ace938fb07826223cc4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RelatedApplicationsModule-ad919b1c5168c27766cda85f3e868fdee415b05b4fc7d586a33e38279d331fe51959bb68c3f6d0af550395929e134d38c182f3f7d0b71ace938fb07826223cc4"' :
                                            'id="xs-components-links-module-RelatedApplicationsModule-ad919b1c5168c27766cda85f3e868fdee415b05b4fc7d586a33e38279d331fe51959bb68c3f6d0af550395929e134d38c182f3f7d0b71ace938fb07826223cc4"' }>
                                            <li class="link">
                                                <a href="components/ApplicationDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApplicationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelatedApplicationMenuItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RelatedApplicationMenuItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelatedApplicationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RelatedApplicationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelatedApplicationsSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RelatedApplicationsSidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestConfigModule.html" data-type="entity-link" >RequestConfigModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RequestConfigModule-37e7d32d8994643b034fdda1320f5ecc656b68e023e507350d03a8be052fab8fb7213d8f62779192125c39d2e44c71227b7b550d5fc45c52c6f59a3ed768ce28"' : 'data-bs-target="#xs-components-links-module-RequestConfigModule-37e7d32d8994643b034fdda1320f5ecc656b68e023e507350d03a8be052fab8fb7213d8f62779192125c39d2e44c71227b7b550d5fc45c52c6f59a3ed768ce28"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestConfigModule-37e7d32d8994643b034fdda1320f5ecc656b68e023e507350d03a8be052fab8fb7213d8f62779192125c39d2e44c71227b7b550d5fc45c52c6f59a3ed768ce28"' :
                                            'id="xs-components-links-module-RequestConfigModule-37e7d32d8994643b034fdda1320f5ecc656b68e023e507350d03a8be052fab8fb7213d8f62779192125c39d2e44c71227b7b550d5fc45c52c6f59a3ed768ce28"' }>
                                            <li class="link">
                                                <a href="components/MemberSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemberSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReasonSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReasonSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestConfigMembersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestConfigMembersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestConfigSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestConfigSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestShelfEntitlementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestShelfEntitlementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestShelfSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestShelfSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestShelvesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestShelvesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestsEntitySelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestsEntitySelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestHistoryModule.html" data-type="entity-link" >RequestHistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RequestHistoryModule-97900f1783b6c37781dae59019a563aef41a5fa0655a2c727ee880fc18b064942fb9e353b1e0b9ee56d08d79764f148323e99af203c05e6e278bc70847a4b02d"' : 'data-bs-target="#xs-components-links-module-RequestHistoryModule-97900f1783b6c37781dae59019a563aef41a5fa0655a2c727ee880fc18b064942fb9e353b1e0b9ee56d08d79764f148323e99af203c05e6e278bc70847a4b02d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestHistoryModule-97900f1783b6c37781dae59019a563aef41a5fa0655a2c727ee880fc18b064942fb9e353b1e0b9ee56d08d79764f148323e99af203c05e6e278bc70847a4b02d"' :
                                            'id="xs-components-links-module-RequestHistoryModule-97900f1783b6c37781dae59019a563aef41a5fa0655a2c727ee880fc18b064942fb9e353b1e0b9ee56d08d79764f148323e99af203c05e6e278bc70847a4b02d"' }>
                                            <li class="link">
                                                <a href="components/DefaultRequestDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultRequestDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestActionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestHistoryFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestHistoryFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RequestHistoryModule-97900f1783b6c37781dae59019a563aef41a5fa0655a2c727ee880fc18b064942fb9e353b1e0b9ee56d08d79764f148323e99af203c05e6e278bc70847a4b02d"' : 'data-bs-target="#xs-injectables-links-module-RequestHistoryModule-97900f1783b6c37781dae59019a563aef41a5fa0655a2c727ee880fc18b064942fb9e353b1e0b9ee56d08d79764f148323e99af203c05e6e278bc70847a4b02d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RequestHistoryModule-97900f1783b6c37781dae59019a563aef41a5fa0655a2c727ee880fc18b064942fb9e353b1e0b9ee56d08d79764f148323e99af203c05e6e278bc70847a4b02d"' :
                                        'id="xs-injectables-links-module-RequestHistoryModule-97900f1783b6c37781dae59019a563aef41a5fa0655a2c727ee880fc18b064942fb9e353b1e0b9ee56d08d79764f148323e99af203c05e6e278bc70847a4b02d"' }>
                                        <li class="link">
                                            <a href="injectables/RequestDisplayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestDisplayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RequestHistoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestHistoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesModule.html" data-type="entity-link" >ResourcesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ResourcesModule-33934af24efd32cf6983d5201d4579438269a55301aa02e23b3260620c89eb84c6f6f441e88a1658fd676462c14fb7e3b9e21d9932175f495529b4f0b1556a6a"' : 'data-bs-target="#xs-components-links-module-ResourcesModule-33934af24efd32cf6983d5201d4579438269a55301aa02e23b3260620c89eb84c6f6f441e88a1658fd676462c14fb7e3b9e21d9932175f495529b4f0b1556a6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourcesModule-33934af24efd32cf6983d5201d4579438269a55301aa02e23b3260620c89eb84c6f6f441e88a1658fd676462c14fb7e3b9e21d9932175f495529b4f0b1556a6a"' :
                                            'id="xs-components-links-module-ResourcesModule-33934af24efd32cf6983d5201d4579438269a55301aa02e23b3260620c89eb84c6f6f441e88a1658fd676462c14fb7e3b9e21d9932175f495529b4f0b1556a6a"' }>
                                            <li class="link">
                                                <a href="components/ResourceSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourceSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResourcesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourcesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RiskConfigModule.html" data-type="entity-link" >RiskConfigModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RiskConfigModule-b95298be7768498dac2278a22de2823db45d563577e28c6e633d67b4d78b58187164b580146c3fbd6d227937156b199d1f16d097bd32377301031ee71acf7aeb"' : 'data-bs-target="#xs-components-links-module-RiskConfigModule-b95298be7768498dac2278a22de2823db45d563577e28c6e633d67b4d78b58187164b580146c3fbd6d227937156b199d1f16d097bd32377301031ee71acf7aeb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RiskConfigModule-b95298be7768498dac2278a22de2823db45d563577e28c6e633d67b4d78b58187164b580146c3fbd6d227937156b199d1f16d097bd32377301031ee71acf7aeb"' :
                                            'id="xs-components-links-module-RiskConfigModule-b95298be7768498dac2278a22de2823db45d563577e28c6e633d67b4d78b58187164b580146c3fbd6d227937156b199d1f16d097bd32377301031ee71acf7aeb"' }>
                                            <li class="link">
                                                <a href="components/RiskConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiskConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RiskConfigSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiskConfigSidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RiskModule.html" data-type="entity-link" >RiskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RiskModule-801d92cb815b0d9a56480bb6f7e7b0e4fbe00c706d39795f8a00083a3ca87e3814a18f6816c1794ba224e7e09ecaf8a2dbdc9e24cd5e7ace57379749855baed0"' : 'data-bs-target="#xs-components-links-module-RiskModule-801d92cb815b0d9a56480bb6f7e7b0e4fbe00c706d39795f8a00083a3ca87e3814a18f6816c1794ba224e7e09ecaf8a2dbdc9e24cd5e7ace57379749855baed0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RiskModule-801d92cb815b0d9a56480bb6f7e7b0e4fbe00c706d39795f8a00083a3ca87e3814a18f6816c1794ba224e7e09ecaf8a2dbdc9e24cd5e7ace57379749855baed0"' :
                                            'id="xs-components-links-module-RiskModule-801d92cb815b0d9a56480bb6f7e7b0e4fbe00c706d39795f8a00083a3ca87e3814a18f6816c1794ba224e7e09ecaf8a2dbdc9e24cd5e7ace57379749855baed0"' }>
                                            <li class="link">
                                                <a href="components/RiskAnalysisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiskAnalysisComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RiskAnalysisSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiskAnalysisSidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleManangementModule.html" data-type="entity-link" >RoleManangementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RoleManangementModule-cf320598a3e1471dd60179435db21509f15dbc5fac4e451a383860c94825c23df80ff4f0a8a963e2b3cedd499b1bf8e2d23c8edaf7e94e0e11076028a7af6dfc"' : 'data-bs-target="#xs-components-links-module-RoleManangementModule-cf320598a3e1471dd60179435db21509f15dbc5fac4e451a383860c94825c23df80ff4f0a8a963e2b3cedd499b1bf8e2d23c8edaf7e94e0e11076028a7af6dfc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoleManangementModule-cf320598a3e1471dd60179435db21509f15dbc5fac4e451a383860c94825c23df80ff4f0a8a963e2b3cedd499b1bf8e2d23c8edaf7e94e0e11076028a7af6dfc"' :
                                            'id="xs-components-links-module-RoleManangementModule-cf320598a3e1471dd60179435db21509f15dbc5fac4e451a383860c94825c23df80ff4f0a8a963e2b3cedd499b1bf8e2d23c8edaf7e94e0e11076028a7af6dfc"' }>
                                            <li class="link">
                                                <a href="components/CompareComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompareComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompareItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompareItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntitlementSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitlementSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewRoleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RestoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleEntitlementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleEntitlementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleMainDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleMainDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleRecommendationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleRecommendationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RollbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RollbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SplitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplitComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleMembershipsModule.html" data-type="entity-link" >RoleMembershipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RoleMembershipsModule-b1b896a5c010e86cce481c07992e1ee32081758716bb918c25f63fa7620871c9078e47afdf8e82e41e504b2968d4b954d09cb5fcd61d436144b79d80f1d7bf4d"' : 'data-bs-target="#xs-components-links-module-RoleMembershipsModule-b1b896a5c010e86cce481c07992e1ee32081758716bb918c25f63fa7620871c9078e47afdf8e82e41e504b2968d4b954d09cb5fcd61d436144b79d80f1d7bf4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoleMembershipsModule-b1b896a5c010e86cce481c07992e1ee32081758716bb918c25f63fa7620871c9078e47afdf8e82e41e504b2968d4b954d09cb5fcd61d436144b79d80f1d7bf4d"' :
                                            'id="xs-components-links-module-RoleMembershipsModule-b1b896a5c010e86cce481c07992e1ee32081758716bb918c25f63fa7620871c9078e47afdf8e82e41e504b2968d4b954d09cb5fcd61d436144b79d80f1d7bf4d"' }>
                                            <li class="link">
                                                <a href="components/DynamicRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicRoleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExcludedMembershipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExcludedMembershipsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MembershipsChooseIdentitiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MembershipsChooseIdentitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotRequestableMembershipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotRequestableMembershipsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrimaryMembershipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrimaryMembershipsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveMembershipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveMembershipComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleMembershipsComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleMembershipsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryMembershipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryMembershipsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceCategoriesModule.html" data-type="entity-link" >ServiceCategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ServiceCategoriesModule-8973fc3c125e01b09c0f93beca0b8f4c7aa2cf30f4b0d270ce5a915cd011c46bf3fec740a13c56ce3a2eef110cf8bd1c13d0865298d09654c612d9ecd9e94dd6"' : 'data-bs-target="#xs-components-links-module-ServiceCategoriesModule-8973fc3c125e01b09c0f93beca0b8f4c7aa2cf30f4b0d270ce5a915cd011c46bf3fec740a13c56ce3a2eef110cf8bd1c13d0865298d09654c612d9ecd9e94dd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServiceCategoriesModule-8973fc3c125e01b09c0f93beca0b8f4c7aa2cf30f4b0d270ce5a915cd011c46bf3fec740a13c56ce3a2eef110cf8bd1c13d0865298d09654c612d9ecd9e94dd6"' :
                                            'id="xs-components-links-module-ServiceCategoriesModule-8973fc3c125e01b09c0f93beca0b8f4c7aa2cf30f4b0d270ce5a915cd011c46bf3fec740a13c56ce3a2eef110cf8bd1c13d0865298d09654c612d9ecd9e94dd6"' }>
                                            <li class="link">
                                                <a href="components/ServiceCategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceCategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceCategoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceItemsEditFormModule.html" data-type="entity-link" >ServiceItemsEditFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ServiceItemsEditFormModule-b0cce668a9e9b4b3547e922f19d11a2711b2f6189b3b9c950f404b82635d07bf503de4eb269d9bc9899de44c90bc2e6691ea835b727c5a29d9dab292429fbd30"' : 'data-bs-target="#xs-components-links-module-ServiceItemsEditFormModule-b0cce668a9e9b4b3547e922f19d11a2711b2f6189b3b9c950f404b82635d07bf503de4eb269d9bc9899de44c90bc2e6691ea835b727c5a29d9dab292429fbd30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServiceItemsEditFormModule-b0cce668a9e9b4b3547e922f19d11a2711b2f6189b3b9c950f404b82635d07bf503de4eb269d9bc9899de44c90bc2e6691ea835b727c5a29d9dab292429fbd30"' :
                                            'id="xs-components-links-module-ServiceItemsEditFormModule-b0cce668a9e9b4b3547e922f19d11a2711b2f6189b3b9c950f404b82635d07bf503de4eb269d9bc9899de44c90bc2e6691ea835b727c5a29d9dab292429fbd30"' }>
                                            <li class="link">
                                                <a href="components/ServiceItemsEditFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemsEditFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceItemsEditModule.html" data-type="entity-link" >ServiceItemsEditModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ServiceItemsEditModule-d26f55493b3369fda8fa52c462c458b75fa93f2a276a31809a5e5d9ba3d252fa34d9f89a2c0777392c11a705e34972a757fa8fd437936606658efcfd4411ed8e"' : 'data-bs-target="#xs-components-links-module-ServiceItemsEditModule-d26f55493b3369fda8fa52c462c458b75fa93f2a276a31809a5e5d9ba3d252fa34d9f89a2c0777392c11a705e34972a757fa8fd437936606658efcfd4411ed8e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServiceItemsEditModule-d26f55493b3369fda8fa52c462c458b75fa93f2a276a31809a5e5d9ba3d252fa34d9f89a2c0777392c11a705e34972a757fa8fd437936606658efcfd4411ed8e"' :
                                            'id="xs-components-links-module-ServiceItemsEditModule-d26f55493b3369fda8fa52c462c458b75fa93f2a276a31809a5e5d9ba3d252fa34d9f89a2c0777392c11a705e34972a757fa8fd437936606658efcfd4411ed8e"' }>
                                            <li class="link">
                                                <a href="components/ServiceItemsEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemsEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceItemsEditSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemsEditSidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceItemsModule.html" data-type="entity-link" >ServiceItemsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ServiceItemsModule-4710109e7b1a50feedf1e32a30388c76c2df77e978300b2e3311b46ec31e4f19e000ced70d387d60699d47b6510e97b93a64cf599f272fef252eefd9b3ea909f"' : 'data-bs-target="#xs-components-links-module-ServiceItemsModule-4710109e7b1a50feedf1e32a30388c76c2df77e978300b2e3311b46ec31e4f19e000ced70d387d60699d47b6510e97b93a64cf599f272fef252eefd9b3ea909f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServiceItemsModule-4710109e7b1a50feedf1e32a30388c76c2df77e978300b2e3311b46ec31e4f19e000ced70d387d60699d47b6510e97b93a64cf599f272fef252eefd9b3ea909f"' :
                                            'id="xs-components-links-module-ServiceItemsModule-4710109e7b1a50feedf1e32a30388c76c2df77e978300b2e3311b46ec31e4f19e000ced70d387d60699d47b6510e97b93a64cf599f272fef252eefd9b3ea909f"' }>
                                            <li class="link">
                                                <a href="components/ServiceItemInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceItemSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceItemsSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemsSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceitemListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceitemListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceItemTagsModule.html" data-type="entity-link" >ServiceItemTagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ServiceItemTagsModule-25ac04eae42544b7abcb5e7c5e799c46ae64efbfd5f9cfb28286f2f3841ddd3763820da5a6f7e7b9a4deeb18aeb93325b32491ee9764ccc131cea19f9978bd09"' : 'data-bs-target="#xs-components-links-module-ServiceItemTagsModule-25ac04eae42544b7abcb5e7c5e799c46ae64efbfd5f9cfb28286f2f3841ddd3763820da5a6f7e7b9a4deeb18aeb93325b32491ee9764ccc131cea19f9978bd09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ServiceItemTagsModule-25ac04eae42544b7abcb5e7c5e799c46ae64efbfd5f9cfb28286f2f3841ddd3763820da5a6f7e7b9a4deeb18aeb93325b32491ee9764ccc131cea19f9978bd09"' :
                                            'id="xs-components-links-module-ServiceItemTagsModule-25ac04eae42544b7abcb5e7c5e799c46ae64efbfd5f9cfb28286f2f3841ddd3763820da5a6f7e7b9a4deeb18aeb93325b32491ee9764ccc131cea19f9978bd09"' }>
                                            <li class="link">
                                                <a href="components/ServiceItemTagsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemTagsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ServiceItemTagsModule-25ac04eae42544b7abcb5e7c5e799c46ae64efbfd5f9cfb28286f2f3841ddd3763820da5a6f7e7b9a4deeb18aeb93325b32491ee9764ccc131cea19f9978bd09"' : 'data-bs-target="#xs-injectables-links-module-ServiceItemTagsModule-25ac04eae42544b7abcb5e7c5e799c46ae64efbfd5f9cfb28286f2f3841ddd3763820da5a6f7e7b9a4deeb18aeb93325b32491ee9764ccc131cea19f9978bd09"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServiceItemTagsModule-25ac04eae42544b7abcb5e7c5e799c46ae64efbfd5f9cfb28286f2f3841ddd3763820da5a6f7e7b9a4deeb18aeb93325b32491ee9764ccc131cea19f9978bd09"' :
                                        'id="xs-injectables-links-module-ServiceItemTagsModule-25ac04eae42544b7abcb5e7c5e799c46ae64efbfd5f9cfb28286f2f3841ddd3763820da5a6f7e7b9a4deeb18aeb93325b32491ee9764ccc131cea19f9978bd09"' }>
                                        <li class="link">
                                            <a href="injectables/ServiceItemTagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceItemTagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingCartModule.html" data-type="entity-link" >ShoppingCartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ShoppingCartModule-b1f8f26ebdd6446311688b03fef7cf092af40e1779ed1de7b3e9e170a9b325cde7c2564b16e2347a44208185f06f37c4eaf71706904b425bd299163441d1211b"' : 'data-bs-target="#xs-components-links-module-ShoppingCartModule-b1f8f26ebdd6446311688b03fef7cf092af40e1779ed1de7b3e9e170a9b325cde7c2564b16e2347a44208185f06f37c4eaf71706904b425bd299163441d1211b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShoppingCartModule-b1f8f26ebdd6446311688b03fef7cf092af40e1779ed1de7b3e9e170a9b325cde7c2564b16e2347a44208185f06f37c4eaf71706904b425bd299163441d1211b"' :
                                            'id="xs-components-links-module-ShoppingCartModule-b1f8f26ebdd6446311688b03fef7cf092af40e1779ed1de7b3e9e170a9b325cde7c2564b16e2347a44208185f06f37c4eaf71706904b425bd299163441d1211b"' }>
                                            <li class="link">
                                                <a href="components/CartItemDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartItemEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartItemValidationOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemValidationOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmCartSubmitDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmCartSubmitDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultCartItemDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultCartItemDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderForAdditionalUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderForAdditionalUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartEmptyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartEmptyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartForLaterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartForLaterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartSubmitWarningsDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartSubmitWarningsDialog</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ShoppingCartModule-b1f8f26ebdd6446311688b03fef7cf092af40e1779ed1de7b3e9e170a9b325cde7c2564b16e2347a44208185f06f37c4eaf71706904b425bd299163441d1211b"' : 'data-bs-target="#xs-injectables-links-module-ShoppingCartModule-b1f8f26ebdd6446311688b03fef7cf092af40e1779ed1de7b3e9e170a9b325cde7c2564b16e2347a44208185f06f37c4eaf71706904b425bd299163441d1211b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ShoppingCartModule-b1f8f26ebdd6446311688b03fef7cf092af40e1779ed1de7b3e9e170a9b325cde7c2564b16e2347a44208185f06f37c4eaf71706904b425bd299163441d1211b"' :
                                        'id="xs-injectables-links-module-ShoppingCartModule-b1f8f26ebdd6446311688b03fef7cf092af40e1779ed1de7b3e9e170a9b325cde7c2564b16e2347a44208185f06f37c4eaf71706904b425bd299163441d1211b"' }>
                                        <li class="link">
                                            <a href="injectables/CartItemLogicService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemLogicService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CartItemsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingCartValidationDetailModule.html" data-type="entity-link" >ShoppingCartValidationDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ShoppingCartValidationDetailModule-e180ba59705efb748f3ca34a27e90c361e918c97ecbefe3e354ada1bd05c14ae501184ad91c66aa9043479a4ef000c680d73970d63f03e2f4eebd1ddf19c225a"' : 'data-bs-target="#xs-components-links-module-ShoppingCartValidationDetailModule-e180ba59705efb748f3ca34a27e90c361e918c97ecbefe3e354ada1bd05c14ae501184ad91c66aa9043479a4ef000c680d73970d63f03e2f4eebd1ddf19c225a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShoppingCartValidationDetailModule-e180ba59705efb748f3ca34a27e90c361e918c97ecbefe3e354ada1bd05c14ae501184ad91c66aa9043479a4ef000c680d73970d63f03e2f4eebd1ddf19c225a"' :
                                            'id="xs-components-links-module-ShoppingCartValidationDetailModule-e180ba59705efb748f3ca34a27e90c361e918c97ecbefe3e354ada1bd05c14ae501184ad91c66aa9043479a4ef000c680d73970d63f03e2f4eebd1ddf19c225a"' }>
                                            <li class="link">
                                                <a href="components/BaseViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DuplicateCheckComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DuplicateCheckComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExclusionCheckComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExclusionCheckComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDependencyCheckComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDependencyCheckComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ShoppingCartValidationDetailModule-e180ba59705efb748f3ca34a27e90c361e918c97ecbefe3e354ada1bd05c14ae501184ad91c66aa9043479a4ef000c680d73970d63f03e2f4eebd1ddf19c225a"' : 'data-bs-target="#xs-injectables-links-module-ShoppingCartValidationDetailModule-e180ba59705efb748f3ca34a27e90c361e918c97ecbefe3e354ada1bd05c14ae501184ad91c66aa9043479a4ef000c680d73970d63f03e2f4eebd1ddf19c225a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ShoppingCartValidationDetailModule-e180ba59705efb748f3ca34a27e90c361e918c97ecbefe3e354ada1bd05c14ae501184ad91c66aa9043479a4ef000c680d73970d63f03e2f4eebd1ddf19c225a"' :
                                        'id="xs-injectables-links-module-ShoppingCartValidationDetailModule-e180ba59705efb748f3ca34a27e90c361e918c97ecbefe3e354ada1bd05c14ae501184ad91c66aa9043479a4ef000c680d73970d63f03e2f4eebd1ddf19c225a"' }>
                                        <li class="link">
                                            <a href="injectables/ShoppingCartValidationDetailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartValidationDetailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SourceDetectiveModule.html" data-type="entity-link" >SourceDetectiveModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SourceDetectiveModule-8a66b60899c3c3a58a41557c65004fb9edc70d721fc8ca5629d4824be0e7d63209305379998c8e9de265fee08ce50b6278d36d5dd85ef842d9bb8630ea2db621"' : 'data-bs-target="#xs-components-links-module-SourceDetectiveModule-8a66b60899c3c3a58a41557c65004fb9edc70d721fc8ca5629d4824be0e7d63209305379998c8e9de265fee08ce50b6278d36d5dd85ef842d9bb8630ea2db621"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SourceDetectiveModule-8a66b60899c3c3a58a41557c65004fb9edc70d721fc8ca5629d4824be0e7d63209305379998c8e9de265fee08ce50b6278d36d5dd85ef842d9bb8630ea2db621"' :
                                            'id="xs-components-links-module-SourceDetectiveModule-8a66b60899c3c3a58a41557c65004fb9edc70d721fc8ca5629d4824be0e7d63209305379998c8e9de265fee08ce50b6278d36d5dd85ef842d9bb8630ea2db621"' }>
                                            <li class="link">
                                                <a href="components/SourceDetectiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SourceDetectiveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SourceDetectiveSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SourceDetectiveSidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatisticsModule.html" data-type="entity-link" >StatisticsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-StatisticsModule-0c3df5828470aeb2b6f9d340fdc7f47f5c3055cf3bce7eb5531493a8066414762b7bcf605ed7cc43c7573b7b59273f612a9a1f92317b02982e2a5113ba39f65c"' : 'data-bs-target="#xs-components-links-module-StatisticsModule-0c3df5828470aeb2b6f9d340fdc7f47f5c3055cf3bce7eb5531493a8066414762b7bcf605ed7cc43c7573b7b59273f612a9a1f92317b02982e2a5113ba39f65c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatisticsModule-0c3df5828470aeb2b6f9d340fdc7f47f5c3055cf3bce7eb5531493a8066414762b7bcf605ed7cc43c7573b7b59273f612a9a1f92317b02982e2a5113ba39f65c"' :
                                            'id="xs-components-links-module-StatisticsModule-0c3df5828470aeb2b6f9d340fdc7f47f5c3055cf3bce7eb5531493a8066414762b7bcf605ed7cc43c7573b7b59273f612a9a1f92317b02982e2a5113ba39f65c"' }>
                                            <li class="link">
                                                <a href="components/BlockDetailSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockDetailSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartsSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartsSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscreteLegendComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscreteLegendComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavoritesTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoritesTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeatmapChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeatmapChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeatmapSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeatmapSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeatmapTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeatmapTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeatmapVisualComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeatmapVisualComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PointStatVisualComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PointStatVisualComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsCardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsCardsVisualsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsCardsVisualsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsForObjectsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsForObjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsHomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsHomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsOrderingSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsOrderingSidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsOrderingSidesheetDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsOrderingSidesheetDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TreemapChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TreemapChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeamResponsibilitiesModule.html" data-type="entity-link" >TeamResponsibilitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TeamResponsibilitiesModule-34d0f264a6fa113788ad3ece825cd1276cb1858641b0d3e5e6b2fda9c985bf2a301aa0d899f4f435bb8de4ca10af8df9f22fb854e2cb688fd147ad9b350ee00b"' : 'data-bs-target="#xs-components-links-module-TeamResponsibilitiesModule-34d0f264a6fa113788ad3ece825cd1276cb1858641b0d3e5e6b2fda9c985bf2a301aa0d899f4f435bb8de4ca10af8df9f22fb854e2cb688fd147ad9b350ee00b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TeamResponsibilitiesModule-34d0f264a6fa113788ad3ece825cd1276cb1858641b0d3e5e6b2fda9c985bf2a301aa0d899f4f435bb8de4ca10af8df9f22fb854e2cb688fd147ad9b350ee00b"' :
                                            'id="xs-components-links-module-TeamResponsibilitiesModule-34d0f264a6fa113788ad3ece825cd1276cb1858641b0d3e5e6b2fda9c985bf2a301aa0d899f4f435bb8de4ca10af8df9f22fb854e2cb688fd147ad9b350ee00b"' }>
                                            <li class="link">
                                                <a href="components/TeamResponsibilitiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamResponsibilitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamResponsibilitySidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamResponsibilitySidesheetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamResponsibilityTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamResponsibilityTileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TeamResponsibilitiesModule-34d0f264a6fa113788ad3ece825cd1276cb1858641b0d3e5e6b2fda9c985bf2a301aa0d899f4f435bb8de4ca10af8df9f22fb854e2cb688fd147ad9b350ee00b"' : 'data-bs-target="#xs-injectables-links-module-TeamResponsibilitiesModule-34d0f264a6fa113788ad3ece825cd1276cb1858641b0d3e5e6b2fda9c985bf2a301aa0d899f4f435bb8de4ca10af8df9f22fb854e2cb688fd147ad9b350ee00b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeamResponsibilitiesModule-34d0f264a6fa113788ad3ece825cd1276cb1858641b0d3e5e6b2fda9c985bf2a301aa0d899f4f435bb8de4ca10af8df9f22fb854e2cb688fd147ad9b350ee00b"' :
                                        'id="xs-injectables-links-module-TeamResponsibilitiesModule-34d0f264a6fa113788ad3ece825cd1276cb1858641b0d3e5e6b2fda9c985bf2a301aa0d899f4f435bb8de4ca10af8df9f22fb854e2cb688fd147ad9b350ee00b"' }>
                                        <li class="link">
                                            <a href="injectables/TeamResponsibilitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamResponsibilitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TermsOfUseModule.html" data-type="entity-link" >TermsOfUseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TermsOfUseModule-2ecf38f3dbbfe7d6d85b3b2c700275a9827d45588f4638cc56d46915c1895999870ea14f24f456c2c2df472d8fca24cfc1541711a87d227a373e5b370fcf1ee5"' : 'data-bs-target="#xs-components-links-module-TermsOfUseModule-2ecf38f3dbbfe7d6d85b3b2c700275a9827d45588f4638cc56d46915c1895999870ea14f24f456c2c2df472d8fca24cfc1541711a87d227a373e5b370fcf1ee5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TermsOfUseModule-2ecf38f3dbbfe7d6d85b3b2c700275a9827d45588f4638cc56d46915c1895999870ea14f24f456c2c2df472d8fca24cfc1541711a87d227a373e5b370fcf1ee5"' :
                                            'id="xs-components-links-module-TermsOfUseModule-2ecf38f3dbbfe7d6d85b3b2c700275a9827d45588f4638cc56d46915c1895999870ea14f24f456c2c2df472d8fca24cfc1541711a87d227a373e5b370fcf1ee5"' }>
                                            <li class="link">
                                                <a href="components/TermsOfUseAcceptComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsOfUseAcceptComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsOfUseListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsOfUseListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsOfUseViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsOfUseViewerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TilesModule.html" data-type="entity-link" >TilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TilesModule-ffd2e15daeb8c0a903caecae56edcf2655876986de1ae2501287968d9778c4896134c095488f2d622fc5573e79e976ae35fcf58400d8bebd589dfb7be5d98027"' : 'data-bs-target="#xs-components-links-module-TilesModule-ffd2e15daeb8c0a903caecae56edcf2655876986de1ae2501287968d9778c4896134c095488f2d622fc5573e79e976ae35fcf58400d8bebd589dfb7be5d98027"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TilesModule-ffd2e15daeb8c0a903caecae56edcf2655876986de1ae2501287968d9778c4896134c095488f2d622fc5573e79e976ae35fcf58400d8bebd589dfb7be5d98027"' :
                                            'id="xs-components-links-module-TilesModule-ffd2e15daeb8c0a903caecae56edcf2655876986de1ae2501287968d9778c4896134c095488f2d622fc5573e79e976ae35fcf58400d8bebd589dfb7be5d98027"' }>
                                            <li class="link">
                                                <a href="components/BadgeTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BadgeTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationTileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-12c5fd4c12d50da4b153620ffdd0a28dbe354638728ed8b07260ff343025d7054f397cbe97d02794d2970c534c038fe791b067c830ce3c64339cf19c513e8024"' : 'data-bs-target="#xs-injectables-links-module-UserModule-12c5fd4c12d50da4b153620ffdd0a28dbe354638728ed8b07260ff343025d7054f397cbe97d02794d2970c534c038fe791b067c830ce3c64339cf19c513e8024"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-12c5fd4c12d50da4b153620ffdd0a28dbe354638728ed8b07260ff343025d7054f397cbe97d02794d2970c534c038fe791b067c830ce3c64339cf19c513e8024"' :
                                        'id="xs-injectables-links-module-UserModule-12c5fd4c12d50da4b153620ffdd0a28dbe354638728ed8b07260ff343025d7054f397cbe97d02794d2970c534c038fe791b067c830ce3c64339cf19c513e8024"' }>
                                        <li class="link">
                                            <a href="injectables/UserModelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserModelService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserProcessModule.html" data-type="entity-link" >UserProcessModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserProcessModule-f7e2c0be5e935d5efbef6d5a9bd6d8d25d0d9b7ffb07407b160b61de41b28899bc01101883313aee4c352d2ab43d0c3d085e5918ebee3a09a2e401f260aa2d99"' : 'data-bs-target="#xs-components-links-module-UserProcessModule-f7e2c0be5e935d5efbef6d5a9bd6d8d25d0d9b7ffb07407b160b61de41b28899bc01101883313aee4c352d2ab43d0c3d085e5918ebee3a09a2e401f260aa2d99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserProcessModule-f7e2c0be5e935d5efbef6d5a9bd6d8d25d0d9b7ffb07407b160b61de41b28899bc01101883313aee4c352d2ab43d0c3d085e5918ebee3a09a2e401f260aa2d99"' :
                                            'id="xs-components-links-module-UserProcessModule-f7e2c0be5e935d5efbef6d5a9bd6d8d25d0d9b7ffb07407b160b61de41b28899bc01101883313aee4c352d2ab43d0c3d085e5918ebee3a09a2e401f260aa2d99"' }>
                                            <li class="link">
                                                <a href="components/UserProcessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProcessComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewDevicesModule.html" data-type="entity-link" >ViewDevicesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewDevicesModule-acacd0042390c94d1620b6f252a8a429be385f96a452a81ac3e1780700ee5d772a1590f512fbfe34e641cfa372d0ada2b8204420cc03698b668947a4aea878f8"' : 'data-bs-target="#xs-components-links-module-ViewDevicesModule-acacd0042390c94d1620b6f252a8a429be385f96a452a81ac3e1780700ee5d772a1590f512fbfe34e641cfa372d0ada2b8204420cc03698b668947a4aea878f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewDevicesModule-acacd0042390c94d1620b6f252a8a429be385f96a452a81ac3e1780700ee5d772a1590f512fbfe34e641cfa372d0ada2b8204420cc03698b668947a4aea878f8"' :
                                            'id="xs-components-links-module-ViewDevicesModule-acacd0042390c94d1620b6f252a8a429be385f96a452a81ac3e1780700ee5d772a1590f512fbfe34e641cfa372d0ada2b8204420cc03698b668947a4aea878f8"' }>
                                            <li class="link">
                                                <a href="components/CreateNewDeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateNewDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewDevicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewDevicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewDevicesSidesheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewDevicesSidesheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AnswerQuestionsComponent.html" data-type="entity-link" >AnswerQuestionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDetailsSidesheetComponent-1.html" data-type="entity-link" >ProductDetailsSidesheetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductEntitlementsComponent-1.html" data-type="entity-link" >ProductEntitlementsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AERoleMembership.html" data-type="entity-link" >AERoleMembership</a>
                            </li>
                            <li class="link">
                                <a href="classes/Approval.html" data-type="entity-link" >Approval</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApproverContainer.html" data-type="entity-link" >ApproverContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseMembership.html" data-type="entity-link" >BaseMembership</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseTreeEntitlement.html" data-type="entity-link" >BaseTreeEntitlement</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseTreeRoleRestoreContext.html" data-type="entity-link" >BaseTreeRoleRestoreContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseTreeRoleRestoreHandler.html" data-type="entity-link" >BaseTreeRoleRestoreHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartDataTyped.html" data-type="entity-link" >ChartDataTyped</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartInfoTyped.html" data-type="entity-link" >ChartInfoTyped</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompareItem.html" data-type="entity-link" >CompareItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompareItemBuilder.html" data-type="entity-link" >CompareItemBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfirmPasswordMatcher.html" data-type="entity-link" >ConfirmPasswordMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepartmentMembership.html" data-type="entity-link" >DepartmentMembership</a>
                            </li>
                            <li class="link">
                                <a href="classes/DuplicatePatternItem.html" data-type="entity-link" >DuplicatePatternItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeatmapDataTyped.html" data-type="entity-link" >HeatmapDataTyped</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeatmapInfoTyped.html" data-type="entity-link" >HeatmapInfoTyped</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeatmapInfoTyped-1.html" data-type="entity-link" >HeatmapInfoTyped</a>
                            </li>
                            <li class="link">
                                <a href="classes/ItshopRequest.html" data-type="entity-link" >ItshopRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ItshopRequestData.html" data-type="entity-link" >ItshopRequestData</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocalityMembership.html" data-type="entity-link" >LocalityMembership</a>
                            </li>
                            <li class="link">
                                <a href="classes/MembershipEntity.html" data-type="entity-link" >MembershipEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotRequestableMembershipsEntity.html" data-type="entity-link" >NotRequestableMembershipsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObjectHyperviewService.html" data-type="entity-link" >ObjectHyperviewService</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParameterContainer.html" data-type="entity-link" >ParameterContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParameterDataContainer.html" data-type="entity-link" >ParameterDataContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParameterDataFkProviderItem.html" data-type="entity-link" >ParameterDataFkProviderItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PasscodeLoginFlow.html" data-type="entity-link" >PasscodeLoginFlow</a>
                            </li>
                            <li class="link">
                                <a href="classes/PasswordHelper.html" data-type="entity-link" >PasswordHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/PasswordItem.html" data-type="entity-link" >PasswordItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PointStatTyped.html" data-type="entity-link" >PointStatTyped</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfitCenterMembership.html" data-type="entity-link" >ProfitCenterMembership</a>
                            </li>
                            <li class="link">
                                <a href="classes/QaLoginFlow.html" data-type="entity-link" >QaLoginFlow</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipientsWrapper.html" data-type="entity-link" >RecipientsWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestableEntitlementType.html" data-type="entity-link" >RequestableEntitlementType</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestsConfigurationCommonMocks.html" data-type="entity-link" >RequestsConfigurationCommonMocks</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceEntitlementType.html" data-type="entity-link" >ResourceEntitlementType</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleAdaptor.html" data-type="entity-link" >RoleAdaptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleRecommendationResultBuilder.html" data-type="entity-link" >RoleRecommendationResultBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleRecommendationResultItem.html" data-type="entity-link" >RoleRecommendationResultItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/RollbackItem.html" data-type="entity-link" >RollbackItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceCategoryTreeDatabase.html" data-type="entity-link" >ServiceCategoryTreeDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServicecategoryTreeDatabase.html" data-type="entity-link" >ServicecategoryTreeDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShoppingCart.html" data-type="entity-link" >ShoppingCart</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShoppingCartValidator.html" data-type="entity-link" >ShoppingCartValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/TreeDatabaseAdaptorService.html" data-type="entity-link" >TreeDatabaseAdaptorService</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkflowDataWrapper.html" data-type="entity-link" >WorkflowDataWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkflowHistoryItemWrapper.html" data-type="entity-link" >WorkflowHistoryItemWrapper</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressbookService.html" data-type="entity-link" >AddressbookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApprovalHistoryService.html" data-type="entity-link" >ApprovalHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApprovalsService.html" data-type="entity-link" >ApprovalsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApprovalWorkflowConstantsService.html" data-type="entity-link" >ApprovalWorkflowConstantsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApprovalWorkflowDataService.html" data-type="entity-link" >ApprovalWorkflowDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArchivedRequestsService.html" data-type="entity-link" >ArchivedRequestsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AwmColorsService.html" data-type="entity-link" >AwmColorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemCloneService.html" data-type="entity-link" >CartItemCloneService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemFkService.html" data-type="entity-link" >CartItemFkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemInteractiveService.html" data-type="entity-link" >CartItemInteractiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemLogicService.html" data-type="entity-link" >CartItemLogicService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemsService.html" data-type="entity-link" >CartItemsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartTableService.html" data-type="entity-link" >ChartTableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompareService.html" data-type="entity-link" >CompareService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link" >DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataExplorerRegistryService.html" data-type="entity-link" >DataExplorerRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataManagementService.html" data-type="entity-link" >DataManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DecisionHistoryService.html" data-type="entity-link" >DecisionHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DecisionStepSevice.html" data-type="entity-link" >DecisionStepSevice</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DelegationService.html" data-type="entity-link" >DelegationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DependencyService.html" data-type="entity-link" >DependencyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DomManagerService.html" data-type="entity-link" >DomManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicRoleSqlWizardService.html" data-type="entity-link" >DynamicRoleSqlWizardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeatureConfigService.html" data-type="entity-link" >FeatureConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormDataService.html" data-type="entity-link" >FormDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeatmapSidesheetService.html" data-type="entity-link" >HeatmapSidesheetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdentitiesReportsService.html" data-type="entity-link" >IdentitiesReportsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdentitiesService.html" data-type="entity-link" >IdentitiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdentitiesService-1.html" data-type="entity-link" >IdentitiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdentityRoleMembershipsService.html" data-type="entity-link" >IdentityRoleMembershipsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImageService.html" data-type="entity-link" >ImageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemEditService.html" data-type="entity-link" >ItemEditService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItshopPatternCreateService.html" data-type="entity-link" >ItshopPatternCreateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItshopPatternService.html" data-type="entity-link" >ItshopPatternService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItshopRequestService.html" data-type="entity-link" >ItshopRequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItshopService.html" data-type="entity-link" >ItshopService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JustificationService.html" data-type="entity-link" >JustificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailSubscriptionService.html" data-type="entity-link" >MailSubscriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyResponsibilitiesRegistryService.html" data-type="entity-link" >MyResponsibilitiesRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewRequestAddToCartService.html" data-type="entity-link" >NewRequestAddToCartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewRequestCategoryApiService.html" data-type="entity-link" >NewRequestCategoryApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewRequestOrchestrationService.html" data-type="entity-link" >NewRequestOrchestrationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewRequestProductApiService.html" data-type="entity-link" >NewRequestProductApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewRequestSelectionService.html" data-type="entity-link" >NewRequestSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationRegistryService.html" data-type="entity-link" >NotificationRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationStreamService.html" data-type="entity-link" >NotificationStreamService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OpSupportUserService.html" data-type="entity-link" >OpSupportUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrgChartService.html" data-type="entity-link" >OrgChartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OwnerControlService.html" data-type="entity-link" >OwnerControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParameterDataService.html" data-type="entity-link" >ParameterDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasscodeService.html" data-type="entity-link" >PasscodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasswordQuestionService.html" data-type="entity-link" >PasswordQuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasswordService.html" data-type="entity-link" >PasswordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatternItemService.html" data-type="entity-link" >PatternItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonService.html" data-type="entity-link" >PersonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PointStatVisualService.html" data-type="entity-link" >PointStatVisualService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDetailsService.html" data-type="entity-link" >ProductDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDetailsService-1.html" data-type="entity-link" >ProductDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductEntitlementApiService.html" data-type="entity-link" >ProductEntitlementApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductSelectionService.html" data-type="entity-link" >ProductSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectConfigurationService.html" data-type="entity-link" >ProjectConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QerApiService.html" data-type="entity-link" >QerApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QerPermissionsService.html" data-type="entity-link" >QerPermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QerService.html" data-type="entity-link" >QerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecipientsApiService.html" data-type="entity-link" >RecipientsApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RelatedApplicationsService.html" data-type="entity-link" >RelatedApplicationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestableEntitlementTypeService.html" data-type="entity-link" >RequestableEntitlementTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestActionService.html" data-type="entity-link" >RequestActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestDisplayService.html" data-type="entity-link" >RequestDisplayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestHistoryService.html" data-type="entity-link" >RequestHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestParametersService.html" data-type="entity-link" >RequestParametersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestsService.html" data-type="entity-link" >RequestsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResourcesService.html" data-type="entity-link" >ResourcesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RiskConfigService.html" data-type="entity-link" >RiskConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleEntitlementActionService.html" data-type="entity-link" >RoleEntitlementActionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link" >RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RollbackItemBuilder.html" data-type="entity-link" >RollbackItemBuilder</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RollebackService.html" data-type="entity-link" >RollebackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SecurityKeysService.html" data-type="entity-link" >SecurityKeysService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceCategoriesService.html" data-type="entity-link" >ServiceCategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceItemsEditService.html" data-type="entity-link" >ServiceItemsEditService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceItemsService.html" data-type="entity-link" >ServiceItemsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceItemTagsService.html" data-type="entity-link" >ServiceItemTagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShelfService.html" data-type="entity-link" >ShelfService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShoppingCartValidationDetailService.html" data-type="entity-link" >ShoppingCartValidationDetailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SplitService.html" data-type="entity-link" >SplitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsApiService.html" data-type="entity-link" >StatisticsApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsChartHandlerService.html" data-type="entity-link" >StatisticsChartHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsConstantsService.html" data-type="entity-link" >StatisticsConstantsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsDataService.html" data-type="entity-link" >StatisticsDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsForObjectsApiService.html" data-type="entity-link" >StatisticsForObjectsApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeamResponsibilitiesService.html" data-type="entity-link" >TeamResponsibilitiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TermsOfUseService.html" data-type="entity-link" >TermsOfUseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserModelService.html" data-type="entity-link" >UserModelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProcessService.html" data-type="entity-link" >UserProcessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewConfigService.html" data-type="entity-link" >ViewConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewDevicesService.html" data-type="entity-link" >ViewDevicesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WorkflowActionService.html" data-type="entity-link" >WorkflowActionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/ApplicationGuardService.html" data-type="entity-link" >ApplicationGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/DataExplorerGuardService.html" data-type="entity-link" >DataExplorerGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/FeatureGuardService.html" data-type="entity-link" >FeatureGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/ItshopPatternGuardService.html" data-type="entity-link" >ItshopPatternGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/ManagerGuardService.html" data-type="entity-link" >ManagerGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/PersonAdminGuardService.html" data-type="entity-link" >PersonAdminGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/RequestsFeatureGuardService.html" data-type="entity-link" >RequestsFeatureGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/RuleAdminGuardService.html" data-type="entity-link" >RuleAdminGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/ShopAdminGuardService.html" data-type="entity-link" >ShopAdminGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/ShopGuardService.html" data-type="entity-link" >ShopGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/ShopStatisticsGuardService.html" data-type="entity-link" >ShopStatisticsGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/StatisticsGuardService.html" data-type="entity-link" >StatisticsGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/StructAdminGuardService.html" data-type="entity-link" >StructAdminGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AdditionalCdrColumn.html" data-type="entity-link" >AdditionalCdrColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdditionalEntityProperties.html" data-type="entity-link" >AdditionalEntityProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddressbookDetail.html" data-type="entity-link" >AddressbookDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApprovalsLoadParameters.html" data-type="entity-link" >ApprovalsLoadParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArchivedRequestHistoryLoadParameters.html" data-type="entity-link" >ArchivedRequestHistoryLoadParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationFactors.html" data-type="entity-link" >AuthenticationFactors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthForm.html" data-type="entity-link" >AuthForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AWMColorValues.html" data-type="entity-link" >AWMColorValues</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Block.html" data-type="entity-link" >Block</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItemCloneParameters.html" data-type="entity-link" >CartItemCloneParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItemEditParameter.html" data-type="entity-link" >CartItemEditParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItemLogic.html" data-type="entity-link" >CartItemLogic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItemValidationResult.html" data-type="entity-link" >CartItemValidationResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CDRGroups.html" data-type="entity-link" >CDRGroups</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartDetails.html" data-type="entity-link" >ChartDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartNamesValues.html" data-type="entity-link" >ChartNamesValues</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColorThresholds.html" data-type="entity-link" >ColorThresholds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColorValues.html" data-type="entity-link" >ColorValues</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnConstraints.html" data-type="entity-link" >ColumnConstraints</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrentProductSource.html" data-type="entity-link" >CurrentProductSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DetailedChartInfo.html" data-type="entity-link" >DetailedChartInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DetailsContainer.html" data-type="entity-link" >DetailsContainer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DetailsView.html" data-type="entity-link" >DetailsView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DisplayOptions.html" data-type="entity-link" >DisplayOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DuplicateCheckParameter.html" data-type="entity-link" >DuplicateCheckParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EdgeType.html" data-type="entity-link" >EdgeType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EdgeTypes.html" data-type="entity-link" >EdgeTypes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditorData.html" data-type="entity-link" >EditorData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitlementCountUpdateData.html" data-type="entity-link" >EntitlementCountUpdateData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExclusionResult.html" data-type="entity-link" >ExclusionResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtendedCollectionData.html" data-type="entity-link" >ExtendedCollectionData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtendedDataWrapper.html" data-type="entity-link" >ExtendedDataWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtendedEntityWrapper.html" data-type="entity-link" >ExtendedEntityWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FKAdvancedPickerResponse.html" data-type="entity-link" >FKAdvancedPickerResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenericStatisticNode.html" data-type="entity-link" >GenericStatisticNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupedData.html" data-type="entity-link" >GroupedData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupedHelp.html" data-type="entity-link" >GroupedHelp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeatmapDataExtended.html" data-type="entity-link" >HeatmapDataExtended</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HelperAlertContent.html" data-type="entity-link" >HelperAlertContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IColumn.html" data-type="entity-link" >IColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IdentityRoleMembershipsParameter.html" data-type="entity-link" >IdentityRoleMembershipsParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestableEntitlementType.html" data-type="entity-link" >IRequestableEntitlementType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoleDataModel.html" data-type="entity-link" >IRoleDataModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoleEntitlements.html" data-type="entity-link" >IRoleEntitlements</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoleMembershipType.html" data-type="entity-link" >IRoleMembershipType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoleRestoreContext.html" data-type="entity-link" >IRoleRestoreContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoleRestoreHandler.html" data-type="entity-link" >IRoleRestoreHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItshopPatternItemEditParameter.html" data-type="entity-link" >ItshopPatternItemEditParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItshopRequestEntityWrapper.html" data-type="entity-link" >ItshopRequestEntityWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LevelConnections.html" data-type="entity-link" >LevelConnections</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MandatoryAccProductResult.html" data-type="entity-link" >MandatoryAccProductResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MembershipContolInfo.html" data-type="entity-link" >MembershipContolInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewRequestCategoryNode.html" data-type="entity-link" >NewRequestCategoryNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewRequestTabModel.html" data-type="entity-link" >NewRequestTabModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ObjectAttestationStatistics.html" data-type="entity-link" >ObjectAttestationStatistics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ObjectOverviewContainer.html" data-type="entity-link" >ObjectOverviewContainer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderedWorkingStep.html" data-type="entity-link" >OrderedWorkingStep</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParameterCategory.html" data-type="entity-link" >ParameterCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParameterCategoryColumn.html" data-type="entity-link" >ParameterCategoryColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParameterDataLoadParameters.html" data-type="entity-link" >ParameterDataLoadParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParameterDataWrapper.html" data-type="entity-link" >ParameterDataWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PasscodeParameter.html" data-type="entity-link" >PasscodeParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PatternItemCandidate.html" data-type="entity-link" >PatternItemCandidate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PendingItemsType.html" data-type="entity-link" >PendingItemsType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersonAllLoadParameters.html" data-type="entity-link" >PersonAllLoadParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PersonForProduct.html" data-type="entity-link" >PersonForProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PointStatStatus.html" data-type="entity-link" >PointStatStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReasonFormGroup.html" data-type="entity-link" >ReasonFormGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestableProduct.html" data-type="entity-link" >RequestableProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestConfigSidesheetData.html" data-type="entity-link" >RequestConfigSidesheetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestDetailParameter.html" data-type="entity-link" >RequestDetailParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestDisplayInterface.html" data-type="entity-link" >RequestDisplayInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestHistoryLoadParameters.html" data-type="entity-link" >RequestHistoryLoadParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestLevelData.html" data-type="entity-link" >RequestLevelData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestParameterDataEntity.html" data-type="entity-link" >RequestParameterDataEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestStepData.html" data-type="entity-link" >RequestStepData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestWorkflowData.html" data-type="entity-link" >RequestWorkflowData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceDataModel.html" data-type="entity-link" >ResourceDataModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceInfo.html" data-type="entity-link" >ResourceInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceInfoApiWrapper.html" data-type="entity-link" >ResourceInfoApiWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleForm.html" data-type="entity-link" >RoleForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleObjectInfo.html" data-type="entity-link" >RoleObjectInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleTranslateKeys.html" data-type="entity-link" >RoleTranslateKeys</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedEntitlement.html" data-type="entity-link" >SelectedEntitlement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedProductItem.html" data-type="entity-link" >SelectedProductItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedProductItemColDef.html" data-type="entity-link" >SelectedProductItemColDef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedShopStructureData.html" data-type="entity-link" >SelectedShopStructureData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedSidesheetData.html" data-type="entity-link" >SelectedSidesheetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceItemHierarchyExtended.html" data-type="entity-link" >ServiceItemHierarchyExtended</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceItemOrder.html" data-type="entity-link" >ServiceItemOrder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceItemParameters.html" data-type="entity-link" >ServiceItemParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceItemsFormGroup.html" data-type="entity-link" >ServiceItemsFormGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceItemTreeWrapper.html" data-type="entity-link" >ServiceItemTreeWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShelfObject.html" data-type="entity-link" >ShelfObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShelfSelectionObject.html" data-type="entity-link" >ShelfSelectionObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SidesheetText.html" data-type="entity-link" >SidesheetText</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SourceDetectiveSidesheetData.html" data-type="entity-link" >SourceDetectiveSidesheetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateProperties.html" data-type="entity-link" >StateProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateThresholds.html" data-type="entity-link" >StateThresholds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatisticsSidesheetResponse.html" data-type="entity-link" >StatisticsSidesheetResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TermsOfUseItem.html" data-type="entity-link" >TermsOfUseItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TosForm.html" data-type="entity-link" >TosForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypedEntitySelectionData.html" data-type="entity-link" >TypedEntitySelectionData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidSave.html" data-type="entity-link" >ValidSave</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowActionEdit.html" data-type="entity-link" >WorkflowActionEdit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowActionEditWrapper.html" data-type="entity-link" >WorkflowActionEditWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkflowActionParameters.html" data-type="entity-link" >WorkflowActionParameters</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});