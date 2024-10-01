<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
  import { InstagramSolid, EnvelopeOutline } from 'flowbite-svelte-icons';
</script>

<Footer footerType="socialmedia" class="flex-shrink-0 w-full">
    <div class="flex flex-row py-2 space-x-2  justify-center items-center">
        <FooterIcon href="https://www.instagram.com/oldsancboys" alt="Instagram account link">
            <InstagramSolid class="w-6 h-6 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="mailto:info@oldsancboys.com" alt="Email us button">
            <EnvelopeOutline class="w-6 h-6 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
    </div>
</Footer>