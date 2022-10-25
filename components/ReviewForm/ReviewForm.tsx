import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";
import cn from "classnames";
import { Input, Textarea, Rating, Button } from "components";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "helpers/api";
import { useState } from "react";
import { motion } from "framer-motion";

export const ReviewForm = ({
  productId,
  className,
  isOpened,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const variants = {
    visible: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: {
        duration: 0.5,
      },
    },
  };

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo,
        { ...formData, productId }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Что-то пошло не так");
      }
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          error={errors.name}
          placeholder="Имя"
          tabIndex={isOpened ? 0 : -1}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          className={styles.title}
          error={errors.title}
          placeholder="Заголовок отзыва"
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          className={styles.description}
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          error={errors.description}
          placeholder="Текст отзыва"
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpened ? 0 : -1}>
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate={isSuccess ? "visible" : "hidden"}
        >
          <div className={cn(styles.success, styles.panel)}>
            <div className={styles.successTitle}>Выш вызов отправлен</div>
            <div className={styles.successDescription}>
              Спасибо ваш отзыв будет опубликован после проверки.
            </div>
            <CloseIcon
              className={styles.close}
              onClick={() => setIsSuccess(false)}
            />
          </div>
        </motion.div>
      )}
      {error && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate={error ? "visible" : "hidden"}
        >
          <div className={cn(styles.error, styles.panel)}>
            <div className={styles.errorTitle}>
              Что-то пошло не так попробуйте обновить страницу
            </div>
            <CloseIcon
              className={cn(styles.errorClose, styles.close)}
              onClick={() => setError(undefined)}
            />
          </div>
        </motion.div>
      )}
    </form>
  );
};
