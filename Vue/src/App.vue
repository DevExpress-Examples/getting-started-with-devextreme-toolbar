<template>
    <div id="container">
        <dxToolbar
            :width="500"
        >
            <dxItem 
                location="before" 
                widget="dxButton" 
                :options="backButtonOptions"
            >
            </dxItem>
            <dxItem 
                location="before" 
            >
                <div id="back">Go back</div>
            </dxItem>
            <dxItem 
                location="center" 
                widget="dxTextBox" 
                :options="textBoxOptions"
            >
            </dxItem>
            <dxItem 
                location="center" 
                widget="dxButton" 
                :options="searchButtonOptions"
            >
            </dxItem>
            <dxItem 
                location="after" 
                widget="dxButton"
                locate-in-menu="auto"
                :options="aboutButtonOptions"
            >
            </dxItem>
            <dxItem 
                location="after"
                locate-in-menu="always" 
            >
                <div id="greeting">Hi <b>User</b>!</div>
            </dxItem>
            <dxItem 
                location="after" 
                widget="dxButton"
                locate-in-menu="always"
                :options="profileButtonOptions"
            >
            </dxItem>
            <dxItem 
                location="after" 
                widget="dxButton"
                locate-in-menu="always"
                :options="settingsButtonOptions"
            >
            </dxItem>
        </dxToolbar>
    </div>
</template>

<script>
    import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
    import notify from "devextreme/ui/notify";
    import 'devextreme/ui/text_box';

    export default {
        components: {
            DxToolbar,
            DxItem
        },
        data() {
            return {
                backButtonOptions: {
                    icon: 'back',
                    onClick: () => {
                        this.showMessage('Back');
                    }
                },
                textBoxOptions: {
                    placeholder: 'Search...',
                    showClearButton: true
                },
                searchButtonOptions: {
                    icon: 'search',
                    onClick: () => {
                        this.showMessage('Search');
                    }
                },
                aboutButtonOptions: {
                    icon: 'info',
                    text: 'About',
                    onClick: () => {
                        this.showMessage('About');
                    }
                },
                profileButtonOptions: {
                    icon: 'user',
                    text: 'Profile',
                    onClick: () => {
                        this.showMessage('Profile');
                    }
                },
                settingsButtonOptions: {
                    icon: 'preferences',
                    text: 'Settings',
                    onClick: () => {
                        this.showMessage('Settings');
                    }
                }
            };
        },
        methods: {    
            showMessage(name) {
                notify(
                    {
                        message: name + ' button has been clicked!',
                        width: 300,
                        position: {
                            my: 'bottom',
                            at: 'bottom',
                            of: '#container'
                        }
                    },
                    'info',
                    500
                );
            }
        }
    }
</script>

<style>
    #container {
        width: 500px;
        height: 170px;
    }

    #back {
        margin-left: 5px;
    }

    #greeting {
        text-align: center;
        margin: 7px;
    }
</style>