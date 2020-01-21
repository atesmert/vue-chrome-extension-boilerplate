<template>
  <div class="settings-main">
    <div class="settings-header">
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#dbdbdb"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path d="M0 12l9-8v6h15v4h-15v6z" />
        </svg>
      </router-link>
      <span>Settings</span>
    </div>
    <!-- dummy settings -->
    <div class="settings-part settings-extension">
      <div class="settings-subheader">Extension</div>
      <div>
        <label class="checkbox">
          <input type="checkbox" checked />
          New Tab
        </label>
      </div>
      <div>
        <label class="checkbox">
          <input type="checkbox" checked />
          Omnibox
        </label>
      </div>
      <div>
        <label class="checkbox">
          <input type="checkbox" />
          Context Menu
        </label>
      </div>
    </div>

    <div class="settings-part settings-external">
      <a href="#">Give us your feedback</a>
      <a href="#">Help</a>
    </div>

    <div class="settings-part settings-external">
      <a href="#">Profile Settings</a>
      <a href="#">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
svg,
span {
  vertical-align: middle;
}
.settings-main {
  background-color: white;
  font-size: 12px;
  height: 100%;
}
.settings-header {
  padding: 3em 3em 1em 3em;
  color: #555555;
  font-weight: bold;
  span {
    font-size: 16px;
    margin-left: 1em;
  }
}
.settings-part {
  border-top: 1px solid #dcdcdc;
  padding: 1em 3em 1em 3em;
}
.settings-subheader {
  color: #555555;
  padding-bottom: 0.5em;
  font-weight: bold;
}
.settings-external > a {
  display: block;
  color: #3273dc;
}
</style>
