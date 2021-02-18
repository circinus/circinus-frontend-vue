<template>
    <div>
        <div class="row mt-5">
            <div class="col-xl-6 col-lg-9 col-md-12 col-sm-12 mb-4">
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
                                    <input placeholder="Zoeken" type="search" class="form-control" maxlength="12">
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
            </div>
            <div class="col-xl-4 col-lg-3 col-md-12 col-sm-12 mb-4">
                <section id="userOfTheWeekComponent" class="habbo--section">
                    <div class="d-flex flex-row mb-4">
                        <i class="sprite sprite--user-of-the-hotel"></i>
                        <div class="d-inline-flex flex-column justify-content-center pl-2">
                            <span class="section-title" v-t="'layout.component.useroftheweek.title'"></span>
                            <span class="section-description" v-t="'layout.component.useroftheweek.description'"></span>
                        </div>
                    </div>
                    <div class="card d-flex flex-column p-4">
                        <div class="card-body d-flex flex-row align-content-center">
                            <img class="image-pixelated img-fluid offline" src="https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-190-4.hr-839-42.ch-255-1193.lg-280-153640.sh-908-153640&amp;action=std&amp;gesture=std&amp;direction=2&amp;head_direction=2&amp;size=l&amp;headonly=0" alt="Raizer">
                            <div  class="d-inline-flex flex-column align-content-center text-ellipsis">
                                <span class="user--username">Raizer</span>
                                <span class="user--motto pt-1 text-ellipsis">"Ares is cool!"</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="guildComponent" class="habbo--section">
                    <div class="d-flex flex-row mb-4">
                        <i class="sprite sprite--members mt-2"></i>
                        <div class="d-inline-flex flex-column justify-content-center pl-2">
                            <span class="section-title" v-t="'layout.component.guild.title'"></span>
                            <span class="section-description" v-t="'layout.component.guild.description'"></span>
                        </div>
                    </div>
                    <div class="card d-flex flex-column p-4">
                        <div class="card-body d-flex flex-row align-content-center">

                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
