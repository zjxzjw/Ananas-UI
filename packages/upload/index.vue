<template>
    <div class="an-upload-container">
        <div class="an-upload" v-show="props.type === 'click'">
            <input type="file" class="an-upload-input" ref="inputRef" @change="handleChange" :multiple="multiple" />
            <an-button @click="handleClick">{{ props.label }}</an-button>
        </div>
        <div class="an-upload-box" @click="handleClick" ref="boxRef" v-show="props.type === 'box'">
            <an-icon name="file-plus" :size="props.iconSize" />
        </div>
        <div class="an-upload-list">
            <li v-for="(file, index) in fileList" :key="index">
                <span><an-icon name="file" size="1.5em" />{{ file.name }}</span>
                <span @click="fileList.splice(index, 1)">
                    <an-tag type="error">删除</an-tag>
                </span>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "AnUpload",
};
</script>

<script setup>
import { ref, reactive } from "vue";

const emit = defineEmits(['change', 'update:files']);

const props = defineProps({
    multiple: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: '选择文件'
    },
    type: {
        type: String,
        default: 'box'
    },
    width:{
        type: [String, Number],
        default: '100px'
    },
    height:{
        type: [String, Number],
        default: '100px'
    },
    iconSize:{
        type: [String, Number],
        default: '1.5em'
    }
})

const inputRef = ref(null);

const boxRef = ref(null);

const fileList = reactive([]);

const handleClick = () => {
    inputRef.value.click();
};

const handleChange = (e) => {
    const files = e.target.files;
    fileList.unshift(...files);
    emit('change', fileList);
}

onMounted(() => {
    let dropBox = boxRef.value;

    dropBox.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        fileList.unshift(...e.dataTransfer.files);
    }, false);

    dropBox.addEventListener('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('leave');
    }, false);

    dropBox.addEventListener('dragenter', function (e) {
        e.preventDefault();
        e.stopPropagation();
    }, false);

    dropBox.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
    }, false);
})
</script>

<style lang="scss" scoped>
.an-upload-container {
    //border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
}

.an-upload-input {
    display: none;
}

.an-upload-list {
    margin-top: 8px;
    display: flex;
    flex-direction: column;

    li {
        display: flex;
        line-height: 24px;
        justify-content: space-between;
        align-items: center;
    }
}

.an-upload-box {
    width: v-bind(width);
    height: v-bind(height);
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>