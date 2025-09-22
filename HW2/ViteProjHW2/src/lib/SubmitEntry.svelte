<script>
    
  import App from "../App.svelte";

  let {submitEntry} = $props();

</script>

<button onclick={submitEntry}>
  Submit
</button>
