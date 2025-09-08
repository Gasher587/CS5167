<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
    import UserInfo from './lib/UserInfo.svelte';
    import CheckInCounter from './lib/CheckInCounter.svelte';
</script>

<div class = "header">
    <UserInfo />
</div>

<main class = "journal">
  <div class="workspace">
    <div>
      <div class="card">
        <CheckInCounter />
      </div>
      
      <div class = "journal-item">
        <label for="sleep">How long did you sleep?</label> <br>
      <input type="number" id="sleep" name="sleep"> <br>
      </div>
      
      <div class = "journal-item">
        <label for="Breakfast">What's for Breakfast?</label> <br>
        <input type="text" id="Breakfast" name="Breakfast"> <br>
      </div>

      <div class = "journal-item">
        <label for="shower"> Showered </label>
        <input type="checkbox" id="shower" name="shower" value="Clean"><br>
      </div>
      
      <div class = "journal-item">
        <label for="skinCare"> Skin Care </label>
        <input type="checkbox" id="skinCare" name="skinCare" value="Glowing"><br>
      </div>
    </div>
  </div>

  <div class="motivation">
    <img class = "images" src="https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif" alt="Motivation Cat">
  </div>
</main>

<style>
  :root{
    --header-text: 1.5em;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  .header{
    display: flex;
    justify-content: space-between;
    justify-items: center;
    background-color: rgb(195, 241, 255);
    color: black;
    padding: 20px;
    line-height: var(--header-text);
  }

  .journal{
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height:calc(100vh - 40px - var(--header-text))
  }

  .workspace{
    
  }

  .motivation{
    display: flex;
    justify-content: right;
    
  }

  .journal-item{
    padding: 20px;
  }
</style>
