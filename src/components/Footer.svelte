<script>
  import { Footer, FooterIcon } from 'flowbite-svelte';
  import { InstagramSolid, EnvelopeOutline } from 'flowbite-svelte-icons';
</script>

<Footer footerType="socialmedia" class="mt-8 flex-shrink-0 w-full">
    <div class="flex flex-row py-2 space-x-2  justify-center items-center">
        <FooterIcon target="_blank" href="https://www.instagram.com/oldsancboys" alt="Instagram account link">
            <InstagramSolid class="w-6 h-6 text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-500" />
        </FooterIcon>
        <FooterIcon href="mailto:info@oldsancboys.com" alt="Email us button">
            <EnvelopeOutline class="w-6 h-6 text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-500" />
        </FooterIcon>
    </div>
</Footer>