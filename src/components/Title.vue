<template>
    <div class="title">
        <h1>
            <span><img src="../assets/ui/jp_outzone.gif" alt="outzone" /></span>
        </h1>
        <h2>
            <img :src="getImgPath(name)" :title="name" />
        </h2>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
/**
 * Render title page.
 */
export default class Title extends Vue {
    @Prop() private name!: string;
    private images = require.context('../assets/ui/', false, /\.gif$/);

    /**
     * Return imported contexted image from assets.
     */
    public getImgPath = (title: string): string => {
        return this.images('./titre_' + title + '.gif');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .title {
        position: relative;
        background-repeat: no-repeat;
        background-image:url('../assets/ui/cyborg.gif');
        width: 480px;
        height: 199px;

        h1 {
            background-image:url('../assets/ui/outzone_logo.gif');
            background-repeat: no-repeat;
            position: absolute;
            width: 208px;
            height: 56px;
            right: 0px;
            top: 0px;

            span {
                position: absolute;
                right: 10px;
                margin-top: 48px;
            }
        }

        h2 {
            position: absolute;
            right: 35px;
            top: 96px;
        }
    }
</style>