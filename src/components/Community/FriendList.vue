<template>
    <section id="friendComponent" class="habbo--section">
        <div class="d-flex flex-row mb-4">
            <i class="icon--friends"></i>
            <div class="d-inline-flex flex-column justify-content-center">
                <span class="section-title" v-t="'layout.component.friendlist.title'"></span>
                <span class="section-description" v-t="'layout.component.friendlist.description'"></span>
            </div>
        </div>
        <div class="card friends">
            <div class="card-body d-flex flex-column">
                <div class="d-inline-flex align-items-center">
                    <div id="search" class="input-group bg-white w-50">
                        <input placeholder="..." type="search" class="form-control" maxlength="12">
                    </div>
                </div>
                <div id="friends" class="row">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="card friend mb-2 d-flex flex-row align-items-center offline">
                            <img src="https://www.habbo.com/habbo-imaging/avatarimage?figure=sh-3089-110.hr-3789-61-61.ch-3539-92.lg-3019-110.hd-600-20&action=std&gesture=eyb&direction=2&head_direction=2&size=n&headonly=0">
                            <div class="user-info d-inline-flex flex-column text-ellipsis">
                                <span class="username text-ellipsis mb-0">Raizer</span>
                                <span class="motto text-ellipsis">Testest</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
