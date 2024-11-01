<script>
  import { Footer, FooterIcon } from 'flowbite-svelte';
  import { InstagramSolid, EnvelopeOutline } from 'flowbite-svelte-icons';
</script>

<Footer footerType="socialmedia" class="mt-6 flex-shrink-0 w-full bg-transparent">
    <div class="flex flex-row py-2 justify-center items-center">
        <FooterIcon target="_blank" href="https://www.instagram.com/oldsancboys" alt="Instagram account link">
            <InstagramSolid class="p-2 w-10 h-10 text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-500" />
        </FooterIcon>
        <FooterIcon href="mailto:info@oldsancboys.com" alt="Email us button">
            <EnvelopeOutline class="p-2 w-10 h-10 text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-500" />
        </FooterIcon>
    </div>
</Footer>