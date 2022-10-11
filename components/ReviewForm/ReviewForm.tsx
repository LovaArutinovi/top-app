import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";
import cn from "classnames";
import { Input, Textarea, Rating, Button } from "components";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register("name")} placeholder="Имя" />
        <Input
          {...register("title")}
          className={styles.title}
          placeholder="Заголовок отзыва"
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable={true}
                ref={field.ref}
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description")}
          className={styles.description}
          placeholder="Текст отзыва"
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Выш вызов отправлен</div>
        <div className={styles.successDescription}>
          Спасибо ваш отзыв будет опубликован после проверки.
        </div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};
