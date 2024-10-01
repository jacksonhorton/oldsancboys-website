<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading, Badge, Span } from 'flowbite-svelte';
    export let activeUrl = '/'; // Receives the current path from the Astro layout
    export let pageTitle = "";
    export let badgeColor = "green";

    let activeClass = 'font-black text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
    let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>


<Navbar>
    <NavBrand href="/">
        <img src="../OSB-inv-trans.png" class="me-3 h-14 sm:h-16 px-2" alt="Old Sanc Boys Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <Heading tag="h1" class="md:flex hidden items-center" size="text-sm">
                Old Sanc Boys
                {#if pageTitle != ""}
                    <Badge color={badgeColor} class="text-2xl font-semibold ms-2">{pageTitle}</Badge>
                {/if}
            </Heading>
        </span>
    </NavBrand>
    <NavHamburger  />
    <NavUl {activeUrl} {activeClass} {nonActiveClass}>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/music">Music</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>