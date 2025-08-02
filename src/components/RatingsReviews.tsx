import { Star, ChevronRight, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import realMaleAvatar from "@/assets/real-male-avatar.jpg";

const RatingsReviews = () => {
  const reviews = [
    {
      id: 1,
      author: "Dagoberto Chacon",
      date: "26/6/25",
      rating: 5,
      text: "Es muy buena la app de verdad me gusta ojalá puedan bajar el valor de",
      helpful: null,
      avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjUzPVgwFM5iwdb-Zkvb9-UupkG7SAfESPK7TWgIK4Ywjijf4lQy=s32-rw"
    },
    {
      id: 2,
      author: "Sotela isabel Diaz lance",
      date: "4/6/25",
      rating: 5,
      text: "es buen habla con gente en verdad no como otras aplicaciones debería tener más opciones de compras de moneda para facilitar las cosas x ejemplo los q son de Venezuela",
      helpful: "58 personas la han encontrado útil",
      avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjWs5eZMhKiZVJNv4-iTbmdk0N8H5EwTN2kxeEuSqP9nbmV6loGk=s32-rw"
    },
    {
      id: 3,
      author: "J. Night",
      date: "28/4/25",
      rating: 1,
      text: "la peor aplicación las videollamadas duran muy poco para que tú vuelvas y recargues y si conoces a alguien y quieres llegar a otros niveles con esa persona que conociste en la app no te permite intercambiar Whatsapp ...",
      helpful: "109 personas la han encontrado útil",
      avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjXwiIUI0gKGW-cH2Y4cS8QiMVVk8hhWUS09vqGbiXbmkuiVHHgb=s32-rw"
    }
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 12 }
  ];

  return (
    <div className="bg-card p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Valoraciones y reseñas</h3>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>

      <p className="text-sm text-muted-foreground">
        Las valoraciones y las reseñas están verificadas y las proporcionan personas que usan el mismo tipo de dispositivo que tú.
      </p>

      {/* Overall Rating */}
      <div className="flex items-start gap-6">
        <div className="text-center">
          <div className="text-5xl font-light">4,3</div>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < 4 ? "fill-app-star text-app-star" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">276.856</p>
        </div>

        {/* Rating Distribution */}
        <div className="flex-1 space-y-1">
          {ratingDistribution.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-2">
              <span className="text-xs w-2">{rating.stars}</span>
              <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${rating.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback>
                    {review.author.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{review.author}</p>
                </div>
              </div>
              <MoreVertical className="w-4 h-4 text-muted-foreground" />
            </div>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? "fill-app-star text-app-star" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
            </div>

            <p className="text-sm">{review.text}</p>

            {review.helpful && (
              <p className="text-xs text-muted-foreground">{review.helpful}</p>
            )}

            <div className="flex gap-2">
              <p className="text-xs text-muted-foreground">¿Te ha resultado útil esta opinión?</p>
              <Button variant="outline" size="sm" className="h-6 px-3 text-xs">
                Sí
              </Button>
              <Button variant="outline" size="sm" className="h-6 px-3 text-xs">
                No
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-primary text-sm font-medium">Ver todas las reseñas</p>
    </div>
  );
};

export default RatingsReviews;