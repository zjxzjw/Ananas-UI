const n=`<template>
  <an-space>
    <an-button>
      <template #icon> <an-icon name="search" /> </template> Search
    </an-button>
    <an-button type="success"
      ><template #icon> <an-icon name="check" color="#fff" /> </template> Success
    </an-button>
    <an-button type="error"
      ><template #icon> <an-icon name="close-circle" color="#fff" /> </template> Error
    </an-button>
  </an-space>
</template>

<script setup>
import AnIcon from "../../icon";
<\/script>
`;export{n as default};
