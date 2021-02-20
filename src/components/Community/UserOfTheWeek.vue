<template>
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
</template>
