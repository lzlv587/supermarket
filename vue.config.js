module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'src/assets',
                'common':'src/common',
                'components':'src/components',
                'network':'src/network',
                // 其中store和router直接通过this.$router和this.$store拿到
            }
        }
    }
}