<script setup lang="ts">
const navigations = [
    {
        url: '/chat',
        icon: 'i-material-symbols-android-messages',
        name: 'All',
        msgCount: 43
    },
    {
        url: '/chat/group',
        icon: 'i-material-symbols-groups-sharp',
        name: 'Group',
        msgCount: 23
    },
    {
        url: '/chat/archive',
        icon: 'i-material-symbols-archive',
        name: 'Archive',
        msgCount: 1
    }
]

const accordionItems = [
    {
        label: 'Teams',
        defaultOpen: true,
        slot: 'teams'
    }
]

const logout = async () => {
    try {
        await useFetch('/api/users/logout', {
            method: 'post',
            onResponse({ response }) {
                if (response.status === 200) {
                    console.log(response);
                    setTimeout(() => {
                        window.location.reload()
                    }, 500);
                }
            }
        })
    } catch (error) {
        console.error(error);
    }
}

const items = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }], [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Log Out',
        icon: 'i-material-symbols-logout',
        shortcuts: ['⌘', 'D'],
        click: async () => {
            await logout()
        }
    }]
]
</script>

<template>
    <nav class="min-h-screen fixed top-0 bottom-0 bg-white p-3 border-r min-w-[200px]">
        <section class="navigation">
            <ul class="flex flex-col gap-3">
                <li v-for="navigation in navigations" class="w-full">
                    <UButton :to="navigation.url" class="w-full font-normal py-3" :icon="navigation.icon">
                        <p class="ml-3">{{ navigation.name }}</p>
                    </UButton>
                </li>
            </ul>
            <UDivider class="my-7" />
        </section>

        <section class="teams">
            <UAccordion :items="accordionItems" class="text-xl">
                <template #teams>
                    <div class="flex items-center justify-between">
                        <UAvatarGroup size="sm" :max="2">
                            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
                            <UAvatar src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
                            <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
                        </UAvatarGroup>
                        <UButton>
                            <UIcon name="i-material-symbols-add" />
                        </UButton>
                    </div>
                    <div class="flex items-center justify-between mt-3">
                        <UAvatarGroup size="sm" :max="2">
                            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
                            <UAvatar src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
                            <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
                        </UAvatarGroup>
                        <UButton>
                            <UIcon name="i-material-symbols-add" />
                        </UButton>
                    </div>
                </template>
            </UAccordion>
            <UDivider class="my-7" />
        </section>

        <div class="flex flex-col gap-3">
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                <UButton variant="ghost" color="gray" :icon="'i-material-symbols-account-circle'">User</UButton>
            </UDropdown>
            <UButton variant="ghost" color="gray" :icon="'i-material-symbols-settings'">Settings</UButton>
        </div>
    </nav>
</template>
