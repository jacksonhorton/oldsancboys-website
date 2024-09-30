<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
  import { InstagramSolid } from 'flowbite-svelte-icons';
</script>

<Footer footerType="socialmedia" class="flex-shrink-0 w-full">
    <div class="flex flex-col py-2 rtl:space-x-reverse justify-end items-center">
        <FooterIcon href="https://www.instagram.com/oldsancboys?igsh=MXBnZWx5MTczZHltZg%3D%3D" alt="Instagram account link">
            <InstagramSolid class="w-6 h-6 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
    </div>
</Footer>