const n=`<template>\r
  <an-space>\r
    <an-button>\r
      <template #icon> <an-icon name="search" /> </template> Search\r
    </an-button>\r
    <an-button type="success"\r
      ><template #icon> <an-icon name="check" color="#fff" /> </template> Success\r
    </an-button>\r
    <an-button type="error"\r
      ><template #icon> <an-icon name="close-circle" color="#fff" /> </template> Error\r
    </an-button>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import AnIcon from "../../icon";\r
<\/script>\r
`;export{n as default};
