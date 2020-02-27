export const mobile = {
    data () {
        return {
            isTablet: false,
            isMobile: false,
            isSmallMobile: false,
            bodyWidth: 0
        };
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.checkResize);
    },
    mounted () {
        this.bodyWidth = window.innerWidth;
        window.addEventListener('resize', this.checkResize);
        if (this.bodyWidth < 1024) this.isTablet = true;
        if (this.bodyWidth < 768) this.isMobile = true;
        if (this.bodyWidth < 500) this.isSmallMobile = true;
    },
    methods: {
        checkResize () {
            this.bodyWidth = window.innerWidth;
            if (this.bodyWidth < 1024) this.isTablet = true;
            else this.isTablet = false;

            if (this.bodyWidth < 768) this.isMobile = true;
            else this.isMobile = false;

            if (this.bodyWidth < 500) this.isSmallMobile = true;
            else this.isSmallMobile = false;
        }
    }
};
