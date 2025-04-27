<template>
  <van-dialog v-model="show"
              :showConfirmButton="false"
              title="结束工单">
    <div class="dialog-body">
      <van-form ref="form">

        <van-field readonly
                   clickable
                   name="time"
                   v-model="endForm.time"
                   :rules="[{ validator, name: 'time' }]"
                   label="沟通时间"
                   placeholder="请选择时间"
                   @click="showPicker = true" />

        <van-field name="intention"
                   required
                   :rules="[{ validator, name: 'intention' }]"
                   label="是否有订购意向">
          <template #input>
            <van-radio-group v-model="endForm.intention"
                             direction="horizontal">
              <van-radio name="1">是</van-radio>
              <van-radio name="0">否</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="message"
                   v-model="endForm.message"
                   type="textarea"
                   label=""
                   :rules="[{ validator, name: 'message' }]"
                   placeholder="请输入沟通结果，并上传图片"></van-field>

        <van-field name="images"
                   :rules="[{ validator, name: 'images' }]"
                   label="">
          <template #input>
            <van-uploader v-model="fileList"
                          :after-read="selectImg" />
          </template>
        </van-field>

        <div class="btns">
          <van-button type="default"
                      @click="cancel">取消</van-button>
          <van-button type="info"
                      @click="confirm">确定</van-button>
        </div>
      </van-form>
    </div>

    <van-popup v-model="showPicker"
               get-container="body"
               position="bottom">
      <van-datetime-picker v-model="tempTime"
                           type="datetime"
                           title="选择时间"
                           @confirm="confirmTime"
                           @cancel="showPicker = false"
                           @close="showPicker = false"
                           :min-date="minDate"
                           :max-date="maxDate" />
    </van-popup>
  </van-dialog>
</template>

<script>
import { parseTime, validateImage } from '@/utils/index.js'
import { fileUpload } from '@/api/api.js'
import { Toast } from 'vant'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2200, 10, 1),
      tempTime: new Date(), // 临时存放时间值
      showPicker: false,
      fileList: [],
      Toast,
      isValidated: false, // 是否已经校验过表单
      endForm: {
        images: [], // 上传图片ID
        time: '',
        message: '',
        intention: '',
      }
    }
  },
  methods: {
    /**
     * 校验方法
     * @param {*} value 值
     * @param {*} rule 规则
     */
    validator(value, rule) {
      switch (rule.name) {
        case 'time': case 'message': case 'intention':
          rule.message = '请填写'
          return !['', undefined, null].includes(this.endForm[rule.name])
        case 'images':
          rule.message = '请上传图片'
          return this.endForm.images.length > 0
      }
    },
    confirm() {
      this.isValidated = true
      this.$refs.form.validate().then(() => {
        this.$emit('update:show', false)
      }).catch(() => {

      })
    },
    cancel() {
      this.$emit('update:show', false)
    },
    /**
     * 选择时间
     * @param {*} value 
     */
    confirmTime(value) {
      this.showPicker = false,
        this.endForm.time = parseTime(value, '{y}-{m}-{d} {h}:{i}')
      if (this.isValidated) this.$refs.form.validate()
    },
    // 上传新的图片
    updateImg() {
      this.$refs.input.click()
    },
    selectImg(file) {
      const imgFile = file.file
      file.status = 'uploading';
      file.message = '上传中...';
      validateImage(imgFile).then(() => {
        var targetFormData = new FormData();
        targetFormData.append('file', imgFile);
        return fileUpload(targetFormData)
      }).then(uploadResult => {
        if (uploadResult.data.retCode === 1 && uploadResult.data.retMessage) {
          // 上传成功
          file.status = 'success';
          file.message = '上传成功';
          file.url = uploadResult.data.retMessage
        } else {
          file.status = 'failed';
          file.message = '上传失败';
        }
      }).catch((e) => {
        file.status = 'failed';
        file.message = '上传失败';
        if (typeof e === 'string') {
          Toast(e)
        }
      })

    }
  },
  watch: {
    fileList: {
      deep: true,
      handler() {
        this.endForm.images = this.fileList.filter(file => file.status === 'success').map(file => file.url)
      }
    }
  }
}
</script>

<style lang="scss" scoped src="../style/endOrderDialog.scss"></style>