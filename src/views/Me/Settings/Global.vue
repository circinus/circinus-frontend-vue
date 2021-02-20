<template>
    <b-card title="Accountinstellingen">
        <ValidationObserver v-slot="{ handleSubmit }">
            <form class="d-flex flex-column " @submit.prevent="handleSubmit(submit)">

                <ValidationProvider name="username" rules="required" v-slot="{ classes }">
                    <b-form-group>
                        <input type="text" class="form-control" :class="classes" id="username"
                               placeholder="Username" v-model="form.username" required="" autofocus="">
                    </b-form-group>
                </ValidationProvider>

                <ValidationProvider name="password" rules="required" v-slot="{ classes }">
                    <div class="form-label-group">
                        <input type="password" class="form-control" :class="classes" name="password"
                               placeholder="Password" id="password" v-model="form.password">
                        <label for="password">Password</label>
                    </div>
                </ValidationProvider>
            </form>
        </ValidationObserver>
    </b-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BCard, BFormGroup } from 'bootstrap-vue';
import { userModule } from '@/store/modules/users/UserModule';
import { Observer } from 'mobx-vue';
import { IUser } from '@/store/modules/auth/IUser';

@Observer
@Component({
    components: {
        BCard,
        BFormGroup
    }
})
export default class GlobalSettings extends Vue {
    private userModule = userModule;

    private user: IUser | null = null;

    private async submit(): Promise<void> {
        //
    }
}
</script>
